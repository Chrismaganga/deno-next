'use client';

import { useRouter } from 'next/navigation';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import sideNavItems from '@/app/utils/NavItems';

const Sidebar = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col bg-white border border-gray-400 ml-0 pl-0 p-0 rounded-sm w-[900px] max-w-xs h-[calc(100vh-100px)] overflow-y-auto">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="items-center justify-center text-center text-wrap border-gray-600 bg-cyan-400 text-white h-20">
            Menu
          </AccordionTrigger>
          <AccordionContent className='mb-94 h-[calc(100vh-200px)]'>
            <div className="p-4 flex flex-col items-center bg-white h-full">
              <ul className="m-10 p-3 gap-10 text-center cursor-pointer">
                {sideNavItems.map((item: { name: string; path: string }) => (
                  <li key={item.name} className="my-2">
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className="block p-5 hover:bg-blue-800 rounded-md w-[200px] text-left text-blue-900 bg-white border border-gray-300"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Sidebar;