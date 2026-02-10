import { content } from '@/data/content';
import { ReferralBox } from './ReferralBox';
import { ArrowRight } from 'lucide-react';

export const StepList = () => {
  return (
    <div className="space-y-12">
      {content.steps.list.map((step, index) => (
        <div key={step.id} className="relative flex gap-6">
          {/* Linia łącząca */}
          {index !== content.steps.list.length - 1 && (
            <div className="absolute left-[20px] top-10 bottom-[-48px] w-0.5 bg-gray-200" />
          )}
          
          {/* Numer kroku */}
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg z-10 shadow-md">
            {step.id}
          </div>

          {/* Treść */}
          <div className="flex-1 pb-2">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-600 leading-relaxed text-lg">{step.desc}</p>
            
            {/* Warunkowe renderowanie elementów specjalnych */}
            {step.isReferralStep && <ReferralBox />}
            
            {step.highlight && (
              <a 
                href={content.links.affiliateUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-red-600 font-semibold hover:text-red-700 hover:underline"
              >
                Przejdź do wniosku teraz <ArrowRight size={16} />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
