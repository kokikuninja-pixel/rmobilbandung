'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Loader2, Send } from 'lucide-react';
import { id } from 'date-fns/locale';
import { motion, AnimatePresence } from 'framer-motion';

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

  const form = useForm<RentalFormValues>({
    resolver: zodResolver(rentalFormSchema),
    defaultValues: {
      name: '',
      ktpOrigin: '',
      currentDomicile: '',
      workLocation: '',
      workDurationInJakarta: '',
      desiredMotor: undefined,
      purpose: '',
      honeypot: '',
    },
  });

  const workLocation = form.watch('workLocation');
  const showWorkDuration = workLocation && workLocation.toLowerCase().includes('jakarta');

  async function onSubmit(data: RentalFormValues) {
    if (data.honeypot) {
      return;
    }
    setIsLoading(true);
    try {
      const summaryInput = {
        name: data.name,
        ktpOrigin: data.ktpOrigin,
        currentDomicile: data.currentDomicile,
        workLocation: data.workLocation,
        workDurationInJakarta: data.workDurationInJakarta,
        desiredMotor: data.desiredMotor,
        rentalStartDate: format(data.rentalDates.from, 'dd MMMM yyyy', { locale: id }),
        rentalEndDate: format(data.rentalDates.to, 'dd MMMM yyyy', { locale: id }),
        purpose: data.purpose,
      };

      const result = await summarizeOrderForWhatsApp(summaryInput);
      
      const domain = window.location.host;
      const intro = `Halo Admin RMJP, saya ingin menyewa motor melalui ${domain}\n\n`;
      const fullMessage = intro + result.summary;

      const phoneNumber = '6285189976267';
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
          name="ktpOrigin"
          render={({ field }) => (
            <FormItem className={itemGridStyles}>
              <FormLabel className={labelStyles}>Asal KTP</FormLabel>
              <FormControl className="md:col-span-3">
                <Input placeholder="cth: Jakarta" {...field} className={inputStyles} />
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
                <Input placeholder="cth: Jakarta Selatan" {...field} className={inputStyles} />
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
                <Input placeholder="cth: Jakarta Pusat" {...field} className={inputStyles} />
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
                    <FormLabel className={labelStyles}>Lama di Jakarta</FormLabel>
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
          name="rentalDates"
          render={({ field }) => (
            <FormItem className={itemGridStyles}>
              <FormLabel className={labelStyles}>Tgl. Sewa</FormLabel>
              <Popover>
                <PopoverTrigger asChild className="md:col-span-3">
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full justify-start text-left font-normal',
                        !field.value?.from && "text-slate-500",
                        inputStyles
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value?.from ? (
                        field.value.to ? (
                          <>
                            {format(field.value.from, 'dd LLL, yyyy')} -{' '}
                            {format(field.value.to, 'dd LLL, yyyy')}
                          </>
                        ) : (
                          format(field.value.from, 'dd LLL, yyyy')
                        )
                      ) : (
                        <span>Pilih tanggal</span>
                      )}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={field.value?.from}
                    selected={{ from: field.value?.from, to: field.value?.to }}
                    onSelect={(range) => field.onChange({ from: range?.from, to: range?.to })}
                    numberOfMonths={2}
                    disabled={{ before: new Date() }}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage className={messageStyles} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="purpose"
          render={({ field }) => (
            <FormItem className={itemGridStyles}>
              <FormLabel className={labelStyles}>Tujuan</FormLabel>
              <FormControl className="md:col-span-3">
                <Textarea
                  placeholder="cth: Untuk bekerja dan jalan-jalan akhir pekan"
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
