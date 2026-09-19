'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Loader2, Send, Check, ChevronsUpDown } from 'lucide-react';
import { id } from 'date-fns/locale';
import { useSearchParams } from 'next/navigation';

import { rentalFormSchema, type RentalFormValues } from '@/lib/validation';
import { buildWhatsAppOrderMessage } from '@/lib/whatsapp-order-message';
import { getWhatsAppLink } from '@/brands';
import { carInventory } from '@/lib/cars';
import { cities } from '@/lib/cities';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';
import { Separator } from './ui/separator';

export function OrderForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const searchParams = useSearchParams();

  const form = useForm<RentalFormValues>({
    resolver: zodResolver(rentalFormSchema),
    defaultValues: {
      previousCustomer: undefined,
      name: '',
      phone: '',
      email: '',
      ktpCity: undefined,
      currentDomicile: undefined,
      occupation: '',
      workLocation: undefined,
      bandungStayDuration: '',
      socialMediaPlatform: 'none',
      socialMediaUsername: '',
      previousInvoice: '',
      desiredMotor: undefined,
      rentalStartDate: undefined,
      rentalStartTime: undefined,
      rentalEndDate: undefined,
      rentalEndTime: undefined,
      unitCount: 1,
      personCount: 1,
      pickupMethod: 'garage',
      deliveryAddress: '',
      usagePurpose: '',
      destination: '',
      sourceOfInformation: undefined,
      disclaimerAgreed: false,
      honeypot: '',
    },
  });

  useEffect(() => {
    const motorFromQuery = searchParams.get('motor');
    if (motorFromQuery) {
        const decodedMotor = decodeURIComponent(motorFromQuery);
        const isValidMotor = carInventory.some(car => car.name === decodedMotor);
        if (isValidMotor) {
            form.setValue('desiredMotor', decodedMotor, { shouldValidate: true });
        }
    }
  }, [searchParams, form]);

  const previousCustomer = form.watch('previousCustomer');
  const socialMediaPlatform = form.watch('socialMediaPlatform');
  const rentalStartDate = form.watch('rentalStartDate');
  const currentDomicile = form.watch('currentDomicile');
  const workLocation = form.watch('workLocation');

  const timeOptions = Array.from({ length: (21 - 5) + 1 }, (_, i) => {
    const hour = 5 + i;
    return `${String(hour).padStart(2, '0')}:00`;
  });

  const sourceOptions = ["Google", "Instagram", "TikTok", "Facebook", "Rekomendasi Teman", "Lainnya"];
  const socialMediaOptions = [
    { value: 'none', label: 'Tidak ingin memberikan' },
    { value: 'instagram', label: 'Instagram' },
    { value: 'tiktok', label: 'TikTok' },
    { value: 'facebook', label: 'Facebook' },
  ];

  async function onSubmit(data: RentalFormValues) {
    if (data.honeypot) return;
    setIsLoading(true);
    try {
      const fullMessage = buildWhatsAppOrderMessage({
        ...data,
        rentalStartDate: format(data.rentalStartDate!, 'dd MMMM yyyy', { locale: id }),
        rentalEndDate: format(data.rentalEndDate!, 'dd MMMM yyyy', { locale: id }),
        domain: window.location.host,
      });
      const whatsappUrl = getWhatsAppLink(fullMessage);

      window.open(whatsappUrl, '_blank');
      toast({
        title: 'Formulir Berhasil Dibuat!',
        description: 'Silakan kirim pesan yang sudah disiapkan di WhatsApp.',
      });
      form.reset();
    } catch (error) {
      console.error('Error building WhatsApp order message:', error);
      toast({
        variant: 'destructive',
        title: 'Gagal memproses pesanan',
        description: 'Terjadi kesalahan. Silakan coba lagi.',
      });
    } finally {
      setIsLoading(false);
    }
  }
  
  const FormSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="space-y-3 sm:space-y-4">
      <h3 className="font-display text-base sm:text-lg font-semibold text-foreground">{title}</h3>
      <div className="space-y-4 rounded-xl border p-3 sm:p-4">{children}</div>
    </div>
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
        
        <FormSection title="Tahap 1: Status Pelanggan">
          <FormField
            control={form.control}
            name="previousCustomer"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Apakah Anda pernah menyewa di RMB sebelumnya?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="yes" /></FormControl>
                      <FormLabel className="font-normal">Ya, saya pelanggan setia</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl><RadioGroupItem value="no" /></FormControl>
                      <FormLabel className="font-normal">Belum, ini pertama kali saya</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormSection>

        {previousCustomer && (
          <div className="space-y-8">
              <FormSection title="Tahap 2: Data Diri & Permintaan Sewa">
                  <FormField name="name" control={form.control} render={({ field }) => (
                    <FormItem><FormLabel>Nama Lengkap (sesuai KTP)</FormLabel><FormControl><Input placeholder="Nama Anda" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField name="phone" control={form.control} render={({ field }) => (
                    <FormItem><FormLabel>Nomor WhatsApp</FormLabel><FormControl><Input type="tel" placeholder="+6281234567890" {...field} /></FormControl><FormDescription>Gunakan format internasional dengan kode negara.</FormDescription><FormMessage /></FormItem>
                  )} />

                  {previousCustomer === 'yes' && (
                    <FormField name="previousInvoice" control={form.control} render={({ field }) => (
                      <FormItem><FormLabel>Nomor Invoice Lama (Opsional)</FormLabel><FormControl><Input placeholder="Contoh: INV-12345" {...field} /></FormControl><FormDescription>Untuk mempercepat verifikasi data Anda.</FormDescription><FormMessage /></FormItem>
                    )} />
                  )}

                  {previousCustomer === 'no' && (
                     <div className="space-y-4">
                       <Separator />
                       <p className="text-sm font-medium text-foreground">Mohon lengkapi data tambahan untuk pelanggan baru:</p>
                       <FormField name="email" control={form.control} render={({ field }) => (
                          <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="email@anda.com" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />

                        <FormField
                          control={form.control}
                          name="ktpCity"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Kota Asal Sesuai KTP</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button variant="outline" role="combobox" className={cn("w-full justify-between", !field.value && "text-muted-foreground")}>
                                      {field.value || "Pilih kota..."}
                                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0">
                                  <Command>
                                    <CommandInput placeholder="Cari kota..." />
                                    <CommandList>
                                      <CommandEmpty>Kota tidak ditemukan.</CommandEmpty>
                                      <CommandGroup>
                                        {cities.map((city) => (
                                          <CommandItem
                                            value={city}
                                            key={city}
                                            onSelect={() => { form.setValue("ktpCity", city); }}
                                          >
                                            <Check className={cn("mr-2 h-4 w-4", city === field.value ? "opacity-100" : "opacity-0")} />
                                            {city}
                                          </CommandItem>
                                        ))}
                                      </CommandGroup>
                                    </CommandList>
                                  </Command>
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="currentDomicile"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Kota Domisili Sekarang</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button variant="outline" role="combobox" className={cn("w-full justify-between", !field.value && "text-muted-foreground")}>
                                      {field.value || "Pilih kota..."}
                                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0">
                                  <Command>
                                    <CommandInput placeholder="Cari kota..." />
                                    <CommandList>
                                      <CommandEmpty>Kota tidak ditemukan.</CommandEmpty>
                                      <CommandGroup>
                                        {cities.map((city) => (
                                          <CommandItem
                                            value={city}
                                            key={city}
                                            onSelect={() => { form.setValue("currentDomicile", city); }}
                                          >
                                            <Check className={cn("mr-2 h-4 w-4", city === field.value ? "opacity-100" : "opacity-0")} />
                                            {city}
                                          </CommandItem>
                                        ))}
                                      </CommandGroup>
                                    </CommandList>
                                  </Command>
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField name="occupation" control={form.control} render={({ field }) => (
                          <FormItem><FormLabel>Pekerjaan</FormLabel><FormControl><Input placeholder="cth: Mahasiswa / Karyawan Swasta" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />

                        <FormField
                          control={form.control}
                          name="workLocation"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Lokasi Kerja (Kota)</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button variant="outline" role="combobox" className={cn("w-full justify-between", !field.value && "text-muted-foreground")}>
                                      {field.value || "Pilih kota..."}
                                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0">
                                  <Command>
                                    <CommandInput placeholder="Cari kota..." />
                                    <CommandList>
                                      <CommandEmpty>Kota tidak ditemukan.</CommandEmpty>
                                      <CommandGroup>
                                        {cities.map((city) => (
                                          <CommandItem
                                            value={city}
                                            key={city}
                                            onSelect={() => { form.setValue("workLocation", city); }}
                                          >
                                            <Check className={cn("mr-2 h-4 w-4", city === field.value ? "opacity-100" : "opacity-0")} />
                                            {city}
                                          </CommandItem>
                                        ))}
                                      </CommandGroup>
                                    </CommandList>
                                  </Command>
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        {(currentDomicile === 'Bandung' || workLocation === 'Bandung') && (
                          <FormField
                            control={form.control}
                            name="bandungStayDuration"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Sudah Berapa Lama Tinggal di Bandung?</FormLabel>
                                <FormControl>
                                  <Input placeholder="cth: 3 bulan / 2 tahun" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                           <FormField name="socialMediaPlatform" control={form.control} render={({ field }) => (
                              <FormItem><FormLabel>Media Sosial (Opsional)</FormLabel><Select onValueChange={field.onChange} value={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Pilih Platform" /></SelectTrigger></FormControl><SelectContent>{socialMediaOptions.map(opt => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}</SelectContent></Select><FormMessage /></FormItem>
                           )} />
                           {socialMediaPlatform && socialMediaPlatform !== 'none' && (
                              <div>
                                <FormField name="socialMediaUsername" control={form.control} render={({ field }) => (
                                  <FormItem><FormLabel>Username</FormLabel><FormControl><Input placeholder="@username" {...field} /></FormControl><FormMessage /></FormItem>
                                )} />
                              </div>
                           )}
                        </div>
                     </div>
                  )}

                  <Separator />
                  <p className="text-sm font-medium text-foreground">Detail sewa yang Anda inginkan:</p>

                  <FormField name="desiredMotor" render={({ field }) => (
                    <FormItem><FormLabel>Unit Mobil</FormLabel><Select onValueChange={field.onChange} value={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Pilih mobil..." /></SelectTrigger></FormControl><SelectContent>{carInventory.map((car) => (<SelectItem key={car.id} value={car.name}>{car.name}</SelectItem>))}</SelectContent></Select><FormMessage /></FormItem>
                  )} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField name="rentalStartDate" render={({ field }) => (
                      <FormItem><FormLabel>Tgl. Mulai Sewa</FormLabel><Popover><PopoverTrigger asChild><FormControl><Button variant={'outline'} className={cn('w-full justify-start text-left font-normal',!field.value && 'text-muted-foreground')}>{field.value ? format(field.value, 'dd LLL, yyyy', { locale: id }) : <span>Pilih tanggal</span>}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /></Button></FormControl></PopoverTrigger><PopoverContent className="w-auto p-0" align="start"><Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={{ before: new Date() }} initialFocus /></PopoverContent></Popover><FormMessage /></FormItem>
                    )} />
                     <FormField name="rentalStartTime" render={({ field }) => (
                      <FormItem><FormLabel>Jam Mulai</FormLabel><Select onValueChange={field.onChange} value={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Pilih jam" /></SelectTrigger></FormControl><SelectContent>{timeOptions.map((time) => (<SelectItem key={time} value={time}>{time}</SelectItem>))}</SelectContent></Select><FormMessage /></FormItem>
                    )} />
                  </div>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField name="rentalEndDate" render={({ field }) => (
                      <FormItem><FormLabel>Tgl. Selesai Sewa</FormLabel><Popover><PopoverTrigger asChild><FormControl><Button variant={'outline'} className={cn('w-full justify-start text-left font-normal',!field.value && 'text-muted-foreground')}>{field.value ? format(field.value, 'dd LLL, yyyy', { locale: id }) : <span>Pilih tanggal</span>}<CalendarIcon className="ml-auto h-4 w-4 opacity-50" /></Button></FormControl></PopoverTrigger><PopoverContent className="w-auto p-0" align="start"><Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={{ before: rentalStartDate || new Date() }} initialFocus /></PopoverContent></Popover><FormMessage /></FormItem>
                    )} />
                     <FormField name="rentalEndTime" render={({ field }) => (
                      <FormItem><FormLabel>Jam Selesai</FormLabel><Select onValueChange={field.onChange} value={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Pilih jam" /></SelectTrigger></FormControl><SelectContent>{timeOptions.map((time) => (<SelectItem key={time} value={time}>{time}</SelectItem>))}</SelectContent></Select><FormMessage /></FormItem>
                    )} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <FormField name="unitCount" render={({ field }) => (
                        <FormItem><FormLabel>Jumlah Unit</FormLabel><FormControl><Input type="number" min="1" {...field} onChange={e => field.onChange(parseInt(e.target.value, 10) || 1)} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField name="personCount" render={({ field }) => (
                        <FormItem><FormLabel>Jumlah Orang</FormLabel><FormControl><Input type="number" min="1" {...field} onChange={e => field.onChange(parseInt(e.target.value, 10) || 1)} /></FormControl><FormMessage /></FormItem>
                      )} />
                  </div>
              </FormSection>
              
              <FormSection title="Tahap 3: Informasi Tambahan">
                  <div className="rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
                    Unit diambil langsung di garasi kami sesuai jam operasional (05.00–21.30 WIB).
                  </div>

                  <FormField name="usagePurpose" control={form.control} render={({ field }) => (
                      <FormItem><FormLabel>Kebutuhan Sewa</FormLabel><FormControl><Input placeholder="cth: Wisata, Proyek, Kebutuhan Harian" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                   <FormField name="destination" control={form.control} render={({ field }) => (
                      <FormItem><FormLabel>Tujuan Lokasi</FormLabel><FormControl><Input placeholder="cth: Lembang, Dago, Pusat Kota" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                   <FormField name="sourceOfInformation" render={({ field }) => (
                    <FormItem><FormLabel>Tahu RMB dari mana?</FormLabel><Select onValueChange={field.onChange} value={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Pilih sumber informasi..." /></SelectTrigger></FormControl><SelectContent>{sourceOptions.map((opt) => (<SelectItem key={opt} value={opt}>{opt}</SelectItem>))}</SelectContent></Select><FormMessage /></FormItem>
                  )} />
              </FormSection>

              <FormField
                  control={form.control}
                  name="disclaimerAgreed"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Pernyataan Persetujuan</FormLabel>
                        <FormDescription>
                          Saya mengerti bahwa ini adalah formulir pengajuan sewa dan bukan konfirmasi final. Ketersediaan unit akan dikonfirmasi oleh admin melalui WhatsApp.
                        </FormDescription>
                         <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
          </div>
        )}
        
        <FormField control={form.control} name="honeypot" render={({ field }) => (<FormItem className="hidden"><FormControl><Input {...field} tabIndex={-1} autoComplete="off" /></FormControl></FormItem>)} />
        
        <div className="flex flex-col items-center gap-4 pt-4">
            <Button type="submit" disabled={isLoading || !previousCustomer} size="lg" className="w-full md:w-auto shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300">
            {isLoading ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Memproses...</>
            ) : (
                <><Send className="ml-2 h-4 w-4" />Lanjut ke WhatsApp</>
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
