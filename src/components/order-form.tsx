'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Loader2 } from 'lucide-react';
import { id } from 'date-fns/locale';
import { motion, AnimatePresence } from 'framer-motion';

import { rentalFormSchema, type RentalFormValues } from '@/lib/validation';
import { summarizeOrderForWhatsApp } from '@/ai/flows/summarize-order-whatsapp';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
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
      numberOfUnits: 1,
      numberOfPeople: 1,
      purpose: '',
      honeypot: '',
    },
  });

  const workLocation = form.watch('workLocation');
  const showWorkDuration = workLocation && workLocation.toLowerCase().includes('jakarta');

  async function onSubmit(data: RentalFormValues) {
    if (data.honeypot) {
      // Bot submission
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
        rentalStartDate: format(data.rentalDates.from, 'dd MMMM yyyy', { locale: id }),
        rentalEndDate: format(data.rentalDates.to, 'dd MMMM yyyy', { locale: id }),
        purpose: data.purpose,
        numberOfUnits: String(data.numberOfUnits),
        numberOfPeople: String(data.numberOfPeople),
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Lengkap</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ktpOrigin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>KTP Asal</FormLabel>
                <FormControl>
                  <Input placeholder="cth: Jakarta" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="currentDomicile"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Domisili Sekarang</FormLabel>
                <FormControl>
                  <Input placeholder="cth: Jakarta Selatan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="workLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lokasi Kerja</FormLabel>
                <FormControl>
                  <Input placeholder="cth: Jakarta Pusat" {...field} />
                </FormControl>
                <FormMessage />
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
                    <FormItem>
                        <FormLabel>Berapa lama bekerja di Jakarta?</FormLabel>
                        <FormControl>
                        <Input placeholder="cth: 2 tahun" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
             </motion.div>
          )}
          </AnimatePresence>
          <FormField
            control={form.control}
            name="numberOfUnits"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sewa Berapa Unit?</FormLabel>
                <FormControl>
                  <Input type="number" min={1} placeholder="1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="numberOfPeople"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Untuk Berapa Orang?</FormLabel>
                <FormControl>
                  <Input type="number" min={1} placeholder="1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rentalDates"
            render={({ field }) => (
              <FormItem className="flex flex-col md:col-span-2">
                <FormLabel>Tanggal Sewa</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-full justify-start text-left font-normal bg-card/80',
                          !field.value?.from && 'text-muted-foreground'
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
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="purpose"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Tujuan Penggunaan</FormLabel>
                <FormControl>
                  <Textarea placeholder="cth: Untuk bekerja dan jalan-jalan akhir pekan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
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
        
        <Button type="submit" disabled={isLoading} size="lg" className="w-full md:w-auto shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 animate-pulse hover:animate-none">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Memproses...
            </>
          ) : (
            'Kirim via WhatsApp'
          )}
        </Button>
        <p className="text-xs text-muted-foreground pt-4">Dengan menekan tombol, Anda akan diarahkan ke WhatsApp untuk mengirim ringkasan pesanan.</p>
      </form>
    </Form>
  );
}
