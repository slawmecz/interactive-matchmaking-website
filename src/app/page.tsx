"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Heart, Phone, Clock, CheckCircle, Users } from "lucide-react";
import Image from "next/image";

interface StoryStep {
  id: number;
  title: string;
  content: string;
  subtitle?: string;
  options?: string[];
  animation?: string;
}

const storySteps: StoryStep[] = [
  {
    id: 0,
    title: "Wyobraź sobie...",
    content: "...że wybieranie partnera życiowego może być przygodą pełną komfortu, anonimowości i\u00A0wyboru.",
    subtitle: "To nie bajka - to\u00A0Biuro Matrymonialne Magnes",
    options: ["🔍 Rozpocznij swoją drogę wybierając\nnajkorzystniejszy pakiet usług"]
  },
  {
    id: 1,
    title: "Dyskrekcja na najwyższym poziomie",
    content: "Jesteś osobą publiczną? Szanujemy Twoją prywatność. U\u00A0nas nie musisz przekazywać zdjęcia \n– wszystko odbywa się\u00A0za\u00A0każdorazową Twoją zgodą.",
    options: ["🌫️ Zachowaj pełną anonimowość", "📸 Pokaż siebie tylko, gdy\u00A0chcesz", "⏳ Zdecyduj później"]
  },
  {
    id: 2,
    title: "Odwracamy role – to\u00A0Ty wybierasz",
    content: "Masz wpływ z\u00A0kim\u00A0się\u00A0spotkasz w\u00A0pierwszej kolejności. To\u00A0Ty\u00A0decydujesz, kto\u00A0Ci się bardziej podoba. \nNie jesteś wybierany, Ty\u00A0wybierasz.",
    options: ["🎯 Ja wybieram", "👤 Wybieram i\u00A0jestem wybierany", "⏳ Zdecyduj później"]
  },
        {
    id: 3,
    title: "Bezpośredni kontakt z\u00A0właścicielem biura",
    content: "Nie masz czasu? Właściciel biura przyjedzie do\u00A0Ciebie. Przedstawienie ofert, profesjonalna sesja zdjęciowa, rozmowa w\u00A0komfortowych warunkach – bez pośpiechu.",
    options: ["🏠 Spotkanie u\u00A0Ciebie", "🏢 Spotkanie w\u00A0siedzibie", "⏳ Zdecyduj później"]
  },
        {
    id: 4,
    title: "Twoja oferta – widoczna i\u00A0skuteczna",
    content: "Twoje ogłoszenie może zostać wypromowane w\u00A0internecie, na\u00A0naszych kanałach społecznościowych. \nZyskujesz zasięg i\u00A0zainteresowanie.",
    options: ["📱 Promuj w\u00A0social media", "🚫 Nie promuj w\u00A0social media", "⏳ Zdecyduj później"]
  },
        {
    id: 5,
    title: "Dowiadujesz się pierwszy o\u00A0nowo zapisanej osobie",
    content: "Pojawił się ktoś, kto spełnia Twoje oczekiwania? Powiadomimy Cię\u00A0niezwłocznie! Masz pierwszeństwo przed\u00A0klientami z\u00A0niższymi pakietami usług.",
    options: ["🏃 Zależy mi na\u00A0szybkości", "🤔 Stawiam na\u00A0rozwagę", "⏳ Zdecyduj później"]
  },
        {
    id: 6,
    title: "Czas jest po\u00A0Twojej stronie",
    content: "Mamy dla\u00A0Ciebie aż\u00A012\u00A0miesięcy aktywnego przedstawiania fotoofert zgodnych z\u00A0Twoimi preferencjami. Chcesz poznać kogoś szybciej? Postaramy się, abyś jak najkrócej korzystał z\u00A0naszych usług!",
    options: ["➡️ Poznaj sposób działania Biura"]
  }
];

const benefits = [
  "Anonimowość i\u00A0dyskrecja",
  "12 miesięcy ofert szytych na\u00A0miarę", 
  "Ty wybierasz – masz kontrolę",
  "Pierwszeństwo w\u00A0dostępie do\u00A0nowych osób",
  "Organizacja randek na\u00A0miejscu w\u00A0biurze",
  "Wypromowanie ogłoszenia",
  "Bezpośredni kontakt z\u00A0właścicielem",
  "Możliwość przedstawienia fotoofert u\u00A0Ciebie w\u00A0domu",
  "Widoczność Twojej oferty – do\u00A0skutku!"
];

const links = [
  { title: "Regulamin", url: "https://matrymonialne24.pl/regulamin/" },
  { title: "Nasze sukcesy", url: "https://matrymonialne24.pl/skojarzone-pary/" },
  { title: "Wydarzenia", url: "https://matrymonialne24.pl/wydarzenia/" },
  { title: "Cennik", url: "https://matrymonialne24.pl/cennik/" },
  { title: "Promocje", url: "https://matrymonialne24.pl/promocje/" },
  { title: "Dołącz do\u00A0nas", url: "https://matrymonialne24.pl/ankieta/" }
];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const nextStep = () => {
    if (currentStep < storySteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowFinal(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      // Remove the last selected option when going back
      setSelectedOptions(selectedOptions.slice(0, -1));
    }
  };

  const selectOption = (option: string) => {
    setSelectedOptions([...selectedOptions, option]);
    setTimeout(nextStep, 800);
  };

  const progress = showFinal ? 100 : (currentStep / storySteps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Floating Hearts and Brand Elements Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(18)].map((_, i) => {
          const isSlice = i % 3 === 0; // Every 3rd element uses slice1.svg
          // Pre-shuffled order for random-looking distribution across screen
          const shuffledIndices = [12, 3, 16, 7, 1, 14, 9, 5, 17, 2, 11, 6, 15, 0, 10, 8, 13, 4];
          const xPercent = 5 + (shuffledIndices[i] / 17) * 90;
          const baseX = `calc(${xPercent}vw - 15px)`; // Center the heart icon
          
          return (
            <motion.div
              key={i}
              className="absolute opacity-15"
              initial={{ y: "150vh", left: baseX, opacity: 0 }}
              animate={{
                y: "-20vh", 
                left: baseX,
                opacity: [0, 0.15, 0.15, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 25 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2.5
              }}
            >
              {isSlice ? (
                <Image
                  src="/slice1.svg"
                  alt="Heart element"
                  width={36}
                  height={36}
                  className="text-pink-400"
                />
              ) : (
                <Heart size={30} fill="currentColor" className="text-pink-400" />
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header with Logo Area */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header with logo and SVGs - same line on desktop, stacked on mobile */}
          <div className="flex flex-col md:flex-row items-center justify-center lg:justify-between gap-4 mb-4 px-4 lg:px-28 mx-auto max-w-full">
            {/* Logo - first on mobile, center on desktop */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative order-1 md:order-2"
            >
              <Image
                src="/Logo.svg"
                alt="Biuro Matrymonialne Magnes Logo"
                width={350}
                height={88}
                className="h-16 sm:h-20 md:h-20 lg:h-24 w-auto"
                style={{ minHeight: '64px', minWidth: '200px' }}
                priority
              />
            </motion.div>
            
            {/* Phone number - right below logo on mobile, hidden on desktop */}
            <p className="text-base text-gray-600 font-medium text-center order-2 md:hidden mt-2">
              <Phone className="inline text-gray-600 mr-2 align-middle" size={18} />
              <span className="mr-8">600 434 700</span>
              <span>Zasięg ogólnopolski</span>
            </p>
            
            {/* Container for SVGs - horizontal on mobile, separate on desktop */}
            <div className="flex flex-row justify-center items-center gap-4 order-3 md:contents w-full md:w-auto">
              {/* Satysfakcja - smaller on mobile, left on desktop */}
              <Image
                src="/satysfakcja.svg"
                alt="Satysfakcja"
                width={200}
                height={60}
                className="w-[140px] md:w-[200px] h-auto md:order-1"
              />
              
              {/* Lata istnienia - smaller on mobile, right on desktop */}
              <Image
                src="/lata-istnienia.svg"
                alt="Lata istnienia"
                width={200}
                height={60}
                className="w-[140px] md:w-[200px] h-auto md:order-3"
              />
            </div>
          </div>
          {/* Phone number - shown on desktop only */}
          <p className="text-xl text-gray-600 font-medium text-center -mt-12 hidden md:block">
            <Phone className="inline text-gray-600 mr-2 align-middle" size={20} />
            <span className="mr-8">600 434 700</span>
            <span>Zasięg ogólnopolski</span>
          </p>
        </motion.div>

        {!showFinal ? (
          <>
            {/* Progress Bar */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">Korzyści {currentStep + 1} z {storySteps.length}</span>
                <Badge variant="outline" className="bg-white">
                  {Math.round(progress)}% ukończone
                </Badge>
              </div>
              <Progress value={progress} className="h-3" />
            </motion.div>

            {/* Story Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {storySteps[currentStep].title}
                    </CardTitle>
                                         <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed font-medium whitespace-pre-line">
                       {storySteps[currentStep].content}
                     </p>
                    {storySteps[currentStep].subtitle && (
                      <p className="text-lg text-purple-600 font-semibold mt-4">
                        {storySteps[currentStep].subtitle}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-4">
                      {storySteps[currentStep].options?.map((option, index) => {
                        // Extract emoji and text separately
                        const emojiMatch = option.match(/^(\p{Emoji}+)/u);
                        const emoji = emojiMatch ? emojiMatch[1] : '';
                        const text = emoji ? option.slice(emoji.length).trim() : option;
                        
                        return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                        >
                                                     <Button
                             onClick={() => selectOption(option)}
                             className="w-full max-w-md mx-auto h-20 md:h-20 text-base md:text-lg lg:text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg touch-manipulation px-4 whitespace-pre-line py-3"
                           >
                            {emoji && <span className="text-2xl md:text-xl lg:text-2xl mr-2">{emoji}</span>}
                            {text}
                          </Button>
                        </motion.div>
                        );
                      })}
                      {/* Cofnij button - show only if not first step */}
                      {currentStep > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + (storySteps[currentStep].options?.length || 0) * 0.1 }}
                        >
                          <Button
                            onClick={prevStep}
                            variant="outline"
                            className="w-full max-w-md mx-auto h-14 md:h-16 text-base md:text-lg font-semibold border-2 border-gray-400 text-gray-700 hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-md touch-manipulation px-4 mt-4"
                          >
                            ← Cofnij
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          /* Final CTA Section */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
                         <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
               <CardHeader className="text-center pb-6">
                 <motion.div
                   animate={{ 
                     scale: [1, 1.2, 1, 1.15, 1, 1, 1, 1],
                     y: [0, -2, 0, -1, 0, 0, 0, 0]
                   }}
                   transition={{ 
                     duration: 2.5, 
                     repeat: Infinity,
                     ease: "easeInOut",
                     times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.7, 1]
                   }}
                   className="mx-auto mb-4"
        >
          <Image
                     src="/slice1.svg"
                     alt="Heart element"
                     width={80}
                     height={80}
                     className="filter drop-shadow-lg"
                   />
                 </motion.div>
                                 <CardTitle className="text-4xl md:text-5xl mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                   Pakiet Najkorzystniejszy
                 </CardTitle>
                                 <p className="text-xl text-gray-700 mb-8">
                   Wszystko, czego potrzebujesz, aby znaleźć miłość swojego życia
                 </p>
              </CardHeader>
              <CardContent>
                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg"
                    >
                      <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                      <span className="font-medium text-gray-800">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hearts Connection Animation - Two Hearts Meet in Center */}
                <motion.div 
                  className="relative mb-12 h-24"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 1 }}
                >
                  {/* Connection Sparkles */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute bottom-4 text-yellow-400"
                      style={{ left: `${50 + (i - 1) * 5}%` }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2 + i * 0.3
                      }}
                    >
                      ✨
                    </motion.div>
                  ))}

                  {/* Floating Positive Words */}
                  {["💕 Miłość", "🤝 Zaufanie", "⭐ Doświadczenie", "😊 Szczęście", "💑 Partnerstwo", "🌟 Harmonia"].map((word, index) => (
                    <motion.div
                      key={word}
                      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-600 font-bold text-lg text-center whitespace-nowrap"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: [0, 1, 1, 0],
                        y: [10, -10, -10, 10]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2.5 + (index * 2),
                        repeatDelay: (6 - 1) * 2
                      }}
                    >
                      {word}
                    </motion.div>
                  ))}
                </motion.div>

                                 {/* Main CTAs */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      asChild
                      className="w-full h-20 md:h-20 text-lg md:text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-xl px-4"
                    >
                      <a href="https://matrymonialne24.pl/ankieta/" target="_blank" rel="noopener noreferrer" className="flex flex-col md:flex-row md:items-center md:justify-center text-center">
                        <span className="whitespace-pre-line md:whitespace-normal">🔐 Rozpocznij z Pakietem{"\n"}Najkorzystniejszym</span>
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      asChild
                      variant="outline" 
                      className="w-full h-20 md:h-20 text-lg md:text-xl font-bold border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-4"
                    >
                      <a href="tel:+48600434700" className="flex flex-col md:flex-row md:items-center md:justify-center text-center">
                        <span className="whitespace-nowrap md:whitespace-normal flex items-center gap-2 justify-center">
                          <span className="md:hidden">📅 Umów spotkanie: <Phone className="inline" size={18} /> 600 434 700</span>
                          <span className="hidden md:inline whitespace-pre-line">📅 Umów spotkanie:{"\n"}<Phone className="inline" size={18} /> 600 434 700</span>
                        </span>
                      </a>
                    </Button>
                  </motion.div>
                </div>

                {/* Examples and Consultation CTAs */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      asChild
                      variant="secondary" 
                      className="w-full h-14 md:h-16 text-base md:text-lg font-bold bg-gradient-to-r from-pink-100 to-purple-100 border-2 border-pink-300 text-purple-700 hover:from-pink-200 hover:to-purple-200 shadow-lg px-4"
                    >
                      <a href="https://matrymonialne24.pl/" target="_blank" rel="noopener noreferrer">
                        💕 Zobacz przykłady ofert
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      asChild
                      variant="outline" 
                      className="w-full h-14 md:h-16 text-base md:text-lg font-bold border-2 border-orange-400 text-orange-600 bg-gradient-to-r from-orange-50 to-yellow-50 hover:from-orange-100 hover:to-yellow-100 shadow-lg px-4"
                    >
                      <a href="https://matrymonialne24.pl/kontakt/" target="_blank" rel="noopener noreferrer">
                        🏠 Zarezerwuj prywatną konsultację
                      </a>
                    </Button>
                  </motion.div>
                </div>

                {/* Quick Links */}
                <div className="border-t pt-8">
                  <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Poznaj nas lepiej
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {links.map((link, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          asChild
                          variant="ghost" 
                          className="w-full h-12 text-lg font-semibold text-purple-700 hover:bg-purple-100"
                        >
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.title}
                          </a>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Magnet Attracts Hearts Animation - Second Magnet */}
                <motion.div 
                  className="relative mb-12 overflow-hidden h-24"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3, duration: 1 }}
                >
                  {/* Magnet */}
                  {/* Magnet - Mobile (pointing right) */}
                  <motion.div
                    className="absolute bottom-1 left-8 text-5xl lg:hidden"
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="inline-block" style={{ transform: 'rotate(0deg)' }}>🧲</span>
                  </motion.div>
                  
                  {/* Magnet - Desktop (270 degrees) */}
                  <motion.div
                    className="absolute bottom-1 left-8 text-5xl hidden lg:block"
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [270, 272, 268, 270]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="inline-block">🧲</span>
                  </motion.div>
                  
                  {/* Attracted Hearts */}
                  {[...Array(4)].map((_, i) => {
                    const yOffsets = [-15, 10, -5, 15];
                    return (
                      <motion.div
                        key={i}
                        className="absolute bottom-4 text-pink-500"
                        initial={{ 
                          x: `${100 + i * 20}vw`,
                          y: yOffsets[i]
                        }}
                        animate={{ 
                          x: "4rem",
                          y: [yOffsets[i], yOffsets[i] - 10, yOffsets[i]],
                          rotate: [0, 360]
                        }}
                        transition={{ 
                          x: {
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeOut",
                            delay: i * 1.5
                          },
                          y: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          },
                          rotate: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                          }
                        }}
                      >
                        {i % 2 === 0 ? (
                          <Heart size={20} fill="currentColor" />
                        ) : (
          <Image
                            src="/slice1.svg"
                            alt="Heart element"
                            width={20}
                            height={20}
                          />
                        )}
                      </motion.div>
                    );
                  })}
                  

                </motion.div>

                {/* Contact Info */}
                <motion.div 
                  className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full">
                    <div className="flex items-center justify-center gap-2 flex-shrink-0 w-full md:w-auto">
                      <Phone className="text-purple-600" size={24} />
                      <span className="text-xl font-bold text-purple-800 whitespace-nowrap">600 434 700</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <Clock className="text-purple-600 flex-shrink-0 ml-2 md:ml-0" size={24} />
                      <span className="text-lg text-purple-700 max-w-[240px] md:max-w-[210px]">22 lata doświadczenia <span className="whitespace-nowrap">w łączeniu serc</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="text-purple-600" size={24} />
                      <span className="text-lg text-purple-700">Setki udanych związków</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/map-of-poland-clip-art-5251161/Map_Of_Poland_clip_art.svg"
                        alt="Mapa Polski"
                        width={32}
                        height={48}
                        className="opacity-100 brightness-75"
                      />
                      <span className="text-lg text-purple-700">Zasięg ogólnopolski</span>
                    </div>
                  </div>
                                 </motion.div>
               </CardContent>
             </Card>


           </motion.div>
         )}
         
         

         {/* Floating Phone Button for Mobile */}
         <motion.div
           className="fixed bottom-6 right-6 z-50 md:hidden"
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           transition={{ delay: 2, duration: 0.5 }}
         >
           <motion.a
             href="tel:+48600434700"
             className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-2xl"
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             animate={{ 
               boxShadow: ["0 0 0 0 rgba(116,86,153,0.4)", "0 0 0 20px rgba(116,86,153,0)", "0 0 0 0 rgba(116,86,153,0.4)"]
             }}
             transition={{ duration: 2, repeat: Infinity }}
           >
             <Phone size={28} />
             {/* Small beating slice element */}
             <motion.div
               className="absolute -top-1 -right-1"
               animate={{ 
                 scale: [1, 1.4, 1],
                 rotate: [0, 15, -15, 0]
               }}
               transition={{ 
                 duration: 1.5, 
                 repeat: Infinity,
                 delay: 0.5
               }}
        >
          <Image
                 src="/slice1.svg"
                 alt="Heart accent"
            width={16}
            height={16}
                 className="opacity-90 filter drop-shadow-sm"
               />
             </motion.div>
           </motion.a>
         </motion.div>
       </div>
    </div>
  );
}
