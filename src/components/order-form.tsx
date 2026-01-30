'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Loader2, Send } from 'lucide-react';
import { id } from 'date-fns/locale';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

import { rentalFormSchema, type RentalFormValues } from '@/lib/validation';
import { summarizeOrderForWhatsApp } from '@/ai/flows/summarize-order-whatsapp';
import { motorInventory } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

export function OrderForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const searchParams = useSearchParams();

  const form = useForm<RentalFormValues>({
    resolver: zodResolver(rentalFormSchema),
    defaultValues: {
      name: '',
      email: '',
      ktpOrigin: '',
      currentDomicile: '',
      workLocation: '',
      workDurationInJakarta: '',
      desiredMotor: undefined,
      rentalStartDate: undefined,
      rentalStartTime: undefined,
      rentalEndDate: undefined,
      rentalEndTime: undefined,
      unitCount: 1,
      personCount: 1,
      usagePurpose: '',
      destination: '',
      honeypot: '',
    },
  });

  useEffect(() => {
    const motorFromQuery = searchParams.get('motor');
    if (motorFromQuery) {
        const decodedMotor = decodeURIComponent(motorFromQuery);
        const isValidMotor = motorInventory.some(motor => motor.name === decodedMotor);
        if (isValidMotor) {
            form.setValue('desiredMotor', decodedMotor, { shouldValidate: true });
        }
    }
  }, [searchParams, form]);


  const workLocation = form.watch('workLocation');
  const showWorkDuration = workLocation && workLocation.toLowerCase().includes('semarang');
  const rentalStartDate = form.watch('rentalStartDate');

  const timeOptions = Array.from({ length: (21 - 5) + 1 }, (_, i) => {
    const hour = 5 + i;
    return `${String(hour).padStart(2, '0')}:00`;
  });

  async function onSubmit(data: RentalFormValues) {
    if (data.honeypot) {
      return;
    }
    setIsLoading(true);
    try {
      const summaryInput = {
        name: data.name,
        email: data.email,
        ktpOrigin: data.ktpOrigin,
        currentDomicile: data.currentDomicile,
        workLocation: data.workLocation,
        workDurationInJakarta: data.workDurationInJakarta,
        desiredMotor: data.desiredMotor,
        rentalStartDate: format(data.rentalStartDate, 'dd MMMM yyyy', { locale: id }),
        rentalStartTime: data.rentalStartTime,
        rentalEndDate: format(data.rentalEndDate, 'dd MMMM yyyy', { locale: id }),
        rentalEndTime: data.rentalEndTime,
        unitCount: data.unitCount,
        personCount: data.personCount,
        usagePurpose: data.usagePurpose,
        destination: data.destination,
        domain: window.location.host,
      };

      const result = await summarizeOrderForWhatsApp(summaryInput);
      
      const fullMessage = result.summary;

      const phoneNumber = '6287738908578';
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
      
      window.open(whatsappUrl, '_blank');
      form.reset();
    } catch (error) {
      console.error('Error summarizing order:', error);
      toast({
        variant: 'destructive',
        title: 'Gagal memproses pesanan',
        description: 'Terjadi kesalahan. Silakan coba lagi.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  const inputStyles = "bg-white text-black placeholder:text-slate-500";
  const labelStyles = "md:text-right text-secondary-foreground/80";
  const itemGridStyles = "grid grid-cols-1 md:grid-cols-4 items-center gap-x-4 space-y-2 md:space-y-0";
  const messageStyles = "md:col-start-2 md:col-span-3";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className={itemGridStyles}>
              <FormLabel className={labelStyles}>Nama</FormLabel>
              <FormControl className="md:col-span-3">
                <Input placeholder="Nama Lengkap Anda" {...field} className={inputStyles} />
              </FormControl>
              <FormMessage className={messageStyles} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className={itemGridStyles}>
              <FormLabel className={labelStyles}>Email</FormLabel>
              <FormControl className="md:col-span-3">
                <Input type="email" placeholder="email@anda.com" {...field} className={inputStyles} />
              </FormControl>
              <FormMessage className={messageStyles} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ktpOrigin"
          render={({ field }) => (
            <FormItem className={itemGridStyles}>
              <FormLabel className={labelStyles}>Asal KTP</FormLabel>
              <FormControl className="md:col-span-3">
                <Input placeholder="cth: Semarang" {...field} className={inputStyles} />
              </FormControl>
              <FormMessage className={messageStyles} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="currentDomicile"
          render={({ field }) => (
            <FormItem className={itemGridStyles}>
              <FormLabel className={labelStyles}>Domisili</FormLabel>
              <FormControl className="md:col-span-3">
                <Input placeholder="cth: Semarang Tengah" {...field} className={inputStyles} />
              </FormControl>
              <FormMessage className={messageStyles} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="workLocation"
          render={({ field }) => (
            <FormItem className={itemGridStyles}>
              <FormLabel className={labelStyles}>Lokasi Kerja</FormLabel>
              <FormControl className="md:col-span-3">
                <Input placeholder="cth: Semarang Barat" {...field} className={inputStyles} />
              </FormControl>
              <FormMessage className={messageStyles} />
            </FormItem>
          )}
        />
        <AnimatePresence>
          {showWorkDuration && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <FormField
                control={form.control}
                name="workDurationInJakarta"
                render={({ field }) => (
                  <FormItem className={itemGridStyles}>
                    <FormLabel className={labelStyles}>Lama di Semarang</FormLabel>
                    <FormControl className="md:col-span-3">
                      <Input placeholder="cth: 2 tahun" {...field} className={inputStyles} />
                    </FormControl>
                    <FormMessage className={messageStyles} />
                  </FormItem>
                )}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <FormField
          control={form.control}
          name="desiredMotor"
          render={({ field }) => (
            <FormItem className={itemGridStyles}>
              <FormLabel className={labelStyles}>Unit Motor</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl className="md:col-span-3">
                  <SelectTrigger className={cn(inputStyles, !field.value && "text-slate-500")}>
                    <SelectValue placeholder="Pilih motor..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {motorInventory.map((motor) => (
                    <SelectItem key={motor.id} value={motor.name}>
                      {motor.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className={messageStyles} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rentalStartDate"
          render={({ field }) => (
            <FormItem className={itemGridStyles}>
              <FormLabel className={labelStyles}>Tgl. Mulai Sewa</FormLabel>
              <Popover>
                <PopoverTrigger asChild className="md:col-span-3">
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full justify-start text-left font-normal',
                        !field.value && 'text-slate-500',
                        inputStyles
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? (
                        format(field.value, 'dd LLL, yyyy', { locale: id })
                      ) : (
                        <span>Pilih tanggal mulai</span>
                      )}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={{ before: new Date() }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage className={messageStyles} />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="rentalStartTime"
          render={({ field }) => (
            <FormItem className={itemGridStyles}>
              <FormLabel className={labelStyles}>Jam Mulai Sewa</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl className="md:col-span-3">
                  <SelectTrigger className={cn(inputStyles, !field.value && "text-slate-500")}>
                    <SelectValue placeholder="Pilih jam mulai" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {timeOptions.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className={messageStyles} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rentalEndDate"
          render={({ field }) => (
            <FormItem className={itemGridStyles}>
              <FormLabel className={labelStyles}>Tgl. Selesai Sewa</FormLabel>
              <Popover>
                <PopoverTrigger asChild className="md:col-span-3">
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full justify-start text-left font-normal',
                        !field.value && 'text-slate-500',
                        inputStyles
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? (
                        format(field.value, 'dd LLL, yyyy', { locale: id })
                      ) : (
                        <span>Pilih tanggal selesai</span>
                      )}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={{ before: rentalStartDate || new Date() }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage className={messageStyles} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rentalEndTime"
          render={({ field }) => (
            <FormItem className={itemGridStyles}>
              <FormLabel className={labelStyles}>Jam Selesai Sewa</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl className="md:col-span-3">
                  <SelectTrigger className={cn(inputStyles, !field.value && "text-slate-500")}>
                    <SelectValue placeholder="Pilih jam selesai" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {timeOptions.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className={messageStyles} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="unitCount"
          render={({ field }) => (
            <FormItem className={itemGridStyles}>
              <FormLabel className={labelStyles}>Jumlah Unit</FormLabel>
              <FormControl className="md:col-span-3">
                <Input type="number" min="1" {...field} className={inputStyles} />
              </FormControl>
              <FormMessage className={messageStyles} />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="personCount"
          render={({ field }) => (
            <FormItem className={itemGridStyles}>
              <FormLabel className={labelStyles}>Jumlah Orang</FormLabel>
              <FormControl className="md:col-span-3">
                <Input type="number" min="1" {...field} className={inputStyles} />
              </FormControl>
              <FormMessage className={messageStyles} />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="usagePurpose"
          render={({ field }) => (
            <FormItem className={itemGridStyles}>
              <FormLabel className={labelStyles}>Kebutuhan</FormLabel>
              <FormControl className="md:col-span-3">
                <Input placeholder="cth: Wisata, Proyek, Kebutuhan Harian" {...field} className={inputStyles} />
              </FormControl>
              <FormMessage className={messageStyles} />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="destination"
          render={({ field }) => (
            <FormItem className={itemGridStyles}>
              <FormLabel className={labelStyles}>Tujuan (Tempat)</FormLabel>
              <FormControl className="md:col-span-3">
                <Textarea
                  placeholder="cth: Simpang Lima, Lawang Sewu, kantor di Pandanaran"
                  {...field}
                  className={inputStyles}
                />
              </FormControl>
              <FormMessage className={messageStyles} />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="honeypot"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormControl>
                <Input {...field} tabIndex={-1} autoComplete="off" />
              </FormControl>
            </FormItem>
          )}
        />
        
        <div className="flex flex-col items-center gap-4 pt-4">
            <Button type="submit" disabled={isLoading} size="lg" className="w-full md:w-auto shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300">
            {isLoading ? (
                <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Memproses...
                </>
            ) : (
                <>
                Pesan Sekaran!
                <Send className="ml-2 h-4 w-4" />
                </>
            )}
            </Button>
            <p className="text-xs text-secondary-foreground/70 text-center">
                Pesan di atas jam 21.00 akan dibalas besok pagi pukul 05:30.
                <br />
                 Data Anda aman bersama kami.
            </p>
        </div>
      </form>
    </Form>
  );
}
