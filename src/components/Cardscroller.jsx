"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const companies = [
  { id: 1, name: "Accenture", logo: "https://www.companieslogo.com/img/orig/ACN-cce5b411.png?download=true" },
  { id: 2, name: "Microsoft", logo: "https://logodix.com/logo/991017.png" },
  { id: 3, name: "Amazon", logo: "https://pngteam.com/images/amazon-logo-png-1121x922_abf78dd4_transparent_202461.png.png" },
  { id: 4, name: "Facebook", logo: "https://static.vecteezy.com/system/resources/previews/023/986/516/original/facebook-logo-facebook-logo-transparent-facebook-icon-transparent-free-free-png.png" },
  { id: 5, name: "Google", logo: "https://i0.wp.com/nanophorm.com/wp-content/uploads/2018/04/google-logo-icon-PNG-Transparent-Background.png?fit=1000%2C1000&ssl=1" },
  { id: 6, name: "Netflix", logo: "https://pngimg.com/uploads/netflix/netflix_PNG8.png" },
  { id: 7, name: "Accenture", logo: "https://www.companieslogo.com/img/orig/ACN-cce5b411.png?download=true" },
  { id: 8, name: "Microsoft", logo: "https://logodix.com/logo/991017.png" },
  { id: 9, name: "Amazon", logo: "https://pngteam.com/images/amazon-logo-png-1121x922_abf78dd4_transparent_202461.png.png" },
  { id: 10, name: "Facebook", logo: "https://static.vecteezy.com/system/resources/previews/023/986/516/original/facebook-logo-facebook-logo-transparent-facebook-icon-transparent-free-free-png.png" },
  { id: 11, name: "Google", logo: "https://i0.wp.com/nanophorm.com/wp-content/uploads/2018/04/google-logo-icon-PNG-Transparent-Background.png?fit=1000%2C1000&ssl=1" },
  { id: 12, name: "Netflix", logo: "https://pngimg.com/uploads/netflix/netflix_PNG8.png" },
];

export default function Cardscroller() {
    const ref = useRef(null);

   
    const moveLeft = () => {
        if (ref.current) {
            ref.current.scrollBy({ left: -220, behavior: "smooth" });
        }
    };

    
    const moveRight = () => {
        if (ref.current) {
            ref.current.scrollBy({ left: 220, behavior: "smooth" });
        }
    };

    return (
        <div id="example" className="relative  w-full h-48 max-w-5xl mx-auto flex flex-col items-center">
            <h2 className="text-2xl text-[#121224] font-semibold mb-4">Card Scroller</h2>

        
            <div className="relative w-full overflow-hidden border p-4 rounded-lg bg-gray-100 flex items-center">
         
                <button
                    onClick={moveLeft}
                    className="relative left-0 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
                >
                    <ChevronLeft className='text-black' size={24} />
                </button>

           
                <ul ref={ref} className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide">
                  {companies.map((company) => (
                    <li key={company.id} className="card">
                      <img
  
/>
                    </li>
                  ))}
                </ul>

          
                <button
                    onClick={moveRight}
                    className="relative right-2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
                >
                    <ChevronRight className='text-black' size={24} />
                </button>
            </div>

            <StyleSheet />
        </div>
    );
}

function StyleSheet() {
    return (
        <style>{`
            #example ul {
                display: flex;
                list-style: none;
                padding: 20px 0;
                margin: 0;
            }

            #example li {
                flex: 0 0 200px;
                height: 150px;
                border-radius: 12px;
            }

            .card {
                width: 200px;
                height: 150px;
                border-radius: 12px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            /* Hide scrollbar for Webkit browsers */
            #example ul::-webkit-scrollbar {
                display: none; /* Safari and Chrome */
            }

            /* Hide scrollbar for Firefox */
            #example ul {
                scrollbar-width: none; /* Firefox */
            }
        `}</style>
    );
}
