
import Carousel from "@/components/ui/carousel";
export function PopularCityList() {
    const slideData =[
  {
    city: "Tokyo",
    country: "Japan",
    title: "Futuristic City & Cherry Blossoms",
    src: "https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=1200&auto=format&fit=crop"
  },
  {
    city: "Kyoto",
    country: "Japan",
    title: "Temples & Autumn Colors",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
  },
  {
    city: "Bali",
    country: "Indonesia",
    title: "Beaches & Rice Terraces",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    city: "Singapore",
    country: "Singapore",
    title: "Gardens by the Bay & Modern Wonders",
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1200&auto=format&fit=crop"
  },
  {
    city: "Bangkok",
    country: "Thailand",
    title: "Street Food & Floating Markets",
    src: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop"
  },
  {
    city: "Chiang Mai",
    country: "Thailand",
    title: "Temples & Lantern Festival",
    src: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop"
  },
  {
    city: "Seoul",
    country: "South Korea",
    title: "K-Pop & Palaces",
    src: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    city: "Beijing",
    country: "China",
    title: "Great Wall & Forbidden City",
    src: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    city: "Hong Kong",
    country: "China",
    title: "Skyline & Night Markets",
    src: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200&auto=format&fit=crop"
  },
  {
    city: "Dubai",
    country: "UAE",
    title: "Desert Safari & Burj Khalifa",
    src: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1200&auto=format&fit=crop"
  },
  {
    city: "Kathmandu",
    country: "Nepal",
    title: "Himalayas & Mount Everest Treks",
    src: "https://images.unsplash.com/photo-1524492449090-1a065f7a7c7e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    city: "Maldives",
    country: "Maldives",
    title: "Overwater Villas & Diving",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },

  // --- India Destinations ---
  {
    city: "Agra",
    country: "India",
    title: "Taj Mahal Wonder",
    src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1200&auto=format&fit=crop"
  },
  {
    city: "Jaipur",
    country: "India",
    title: "Pink City & Palaces",
    src: "https://images.unsplash.com/photo-1583241806514-1b2a3c4d46c7?q=80&w=1200&auto=format&fit=crop"
  },
  {
    city: "Goa",
    country: "India",
    title: "Beaches & Nightlife",
    src: "https://images.unsplash.com/photo-1592318730252-b63f63b28d1b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    city: "Kerala",
    country: "India",
    title: "Backwaters & Houseboats",
    src: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop"
  },
  {
    city: "Ladakh",
    country: "India",
    title: "Mountains & Monasteries",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
  },
  {
    city: "Varanasi",
    country: "India",
    title: "Spiritual Ghats of Ganga",
    src: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop"
  }
]


    return (
        <div className="relative overflow-hidden w-full h-full py-20">
            <h2 className="text-center p-4 text-lg font-extrabold"> Popular Destination to visit</h2>
            <Carousel slides={slideData} />
        </div>
    );
}
