"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Heart, Phone, Shield, Clock, Star, CheckCircle, Users, MapPin } from "lucide-react";

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
    content: "...że wybieranie partnera życiowego mogłoby być przygodą pełną komfortu, anonimowości i wyboru?",
    subtitle: "To nie bajka - to Biuro Matrymonialne Magnes",
    options: ["🔍 Rozpocznij swoją drogę"]
  },
  {
    id: 1,
    title: "Wybierasz świat – Twój sposób działania",
    content: "Jesteś osobą publiczną? Szanujemy Twoją prywatność. U nas nie musisz przekazywać zdjęcia – wszystko odbywa się za każdorazową Twoją zgodą.",
    options: ["🌫️ Zachowaj anonimowość", "📸 Pokaż siebie tylko wtedy, gdy chcesz", "➡️ Przejdź dalej"]
  },
  {
    id: 2,
    title: "Czas jest po Twojej stronie",
    content: "Nie musisz się spieszyć. Mamy dla Ciebie 12 miesięcy aktywnego przedstawiania idealnych dopasowań – zgodnych z Twoimi preferencjami.",
    options: ["➡️ Poznaj sposób działania Biura"]
  },
  {
    id: 3,
    title: "Odwracamy role – to Ty wybierasz",
    content: "To Ty decydujesz, z kim się spotkasz. Nie jesteś wybierany – Ty wybierasz. Masz pierwszeństwo względem innych klientów.",
    options: ["🔝 Otrzymaj dostęp do najnowszych zgłoszeń jako pierwszy", "🎯 Ustal swoje preferencje, my znajdziemy resztę", "➡️ Chcę zobaczyć przykłady ofert"]
  },
  {
    id: 4,
    title: "Właściciel biura – tylko dla Ciebie",
    content: "Nie masz czasu? Właściciel biura przyjedzie do Ciebie. Przedstawienie ofert, profesjonalna sesja zdjęciowa, rozmowa w komfortowych warunkach – bez pośpiechu.",
    options: ["➡️ Zarezerwuj prywatną konsultację"]
  },
  {
    id: 5,
    title: "Twoja oferta – widoczna i skuteczna",
    content: "Twoje ogłoszenie może zostać wypromowane w internecie, na naszych kanałach społecznościowych. Zyskujesz zasięg i zainteresowanie.",
    options: ["📣 Zgoda na promocję", "🙈 Zachowaj prywatność – nadal możesz wybrać kogo chcesz", "➡️ Zobacz przykładowe ogłoszenia"]
  }
];

const benefits = [
  "Anonimowość i dyskrecja",
  "12 miesięcy ofert szytych na miarę", 
  "Ty wybierasz – masz kontrolę",
  "Pierwszeństwo w dostępie do nowych osób",
  "Profesjonalna sesja zdjęciowa",
  "Wypromowanie ogłoszenia",
  "Bezpośredni kontakt z właścicielem",
  "Możliwość organizacji spotkań w biurze lub u Ciebie",
  "Wszystko – do skutku!"
];

const links = [
  { title: "Strona główna", url: "https://matrymonialne24.pl/" },
  { title: "Nasze pary", url: "https://matrymonialne24.pl/pary/" },
  { title: "Wydarzenia", url: "https://matrymonialne24.pl/wydarzenia/" },
  { title: "Cennik", url: "https://matrymonialne24.pl/cennik/" },
  { title: "Promocje", url: "https://matrymonialne24.pl/promocje/" },
  { title: "Dołącz do nas", url: "https://matrymonialne24.pl/ankieta/" }
];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [heartsVisible, setHeartsVisible] = useState(false);

  useEffect(() => {
    setHeartsVisible(true);
  }, []);

  const nextStep = () => {
    if (currentStep < storySteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowFinal(true);
    }
  };

  const selectOption = (option: string) => {
    setSelectedOptions([...selectedOptions, option]);
    setTimeout(nextStep, 800);
  };

  const progress = ((currentStep + 1) / storySteps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-400 opacity-15"
            initial={{ y: "110vh", x: 100 + i * 200 }}
            animate={{
              y: "-10vh", 
              x: 50 + i * 200,
              rotate: [0, 360]
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2
            }}
          >
            <Heart size={24} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header with Logo Area */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart 
                size={48} 
                className="text-pink-600" 
                fill="currentColor"
              />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Biuro Matrymonialne Magnes
            </h1>
          </div>
          <p className="text-xl text-gray-600 font-medium">22 lata doświadczenia w łączeniu serc</p>
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
                <span className="text-sm font-medium text-gray-600">Krok {currentStep + 1} z {storySteps.length}</span>
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
                                         <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed font-medium">
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
                      {storySteps[currentStep].options?.map((option, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                        >
                                                     <Button
                             onClick={() => selectOption(option)}
                             className="w-full max-w-md mx-auto h-16 md:h-20 text-lg md:text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg touch-manipulation"
                           >
                            {option}
                          </Button>
                        </motion.div>
                      ))}
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
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mx-auto mb-4"
                >
                  <Heart size={64} className="text-pink-600" fill="currentColor" />
                </motion.div>
                <CardTitle className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
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

                {/* Main CTAs */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      asChild
                      className="w-full h-20 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-xl"
                    >
                      <a href="https://matrymonialne24.pl/ankieta/" target="_blank" rel="noopener noreferrer">
                        🔐 Rozpocznij z Pakietem Najkorzystniejszym
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
                      className="w-full h-20 text-xl font-bold border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                    >
                      <a href="tel:+48600434700">
                        📅 Umów spotkanie: +48 600 434 700
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

                {/* Contact Info */}
                <motion.div 
                  className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Phone className="text-purple-600" size={24} />
                      <span className="text-xl font-bold text-purple-800">+48 600 434 700</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="text-purple-600" size={24} />
                      <span className="text-lg text-purple-700">22 lata doświadczenia</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="text-purple-600" size={24} />
                      <span className="text-lg text-purple-700">Setki udanych związków</span>
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
             className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-2xl"
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             animate={{ 
               boxShadow: ["0 0 0 0 rgba(116,86,153,0.4)", "0 0 0 20px rgba(116,86,153,0)", "0 0 0 0 rgba(116,86,153,0.4)"]
             }}
             transition={{ duration: 2, repeat: Infinity }}
           >
             <Phone size={28} />
           </motion.a>
         </motion.div>
       </div>
     </div>
   );
}
