
import Carousel from "@/components/ui/carousel";
export function PopularCityList() {
    const slideData = [
        {
            city: "Kyoto",
            country: "Japan",
            title: "Ancient Temples of Kyoto",
            src: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1200&auto=format&fit=crop"
        },
        {
            city: "Paris",
            country: "France",
            title: "Eiffel Tower & Paris Nights",
            src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop"
        },
        {
            city: "Cape Town",
            country: "South Africa",
            title: "Table Mountain Adventure",
            src: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1200&auto=format&fit=crop"
        },

        {
            city: "Bali",
            country: "Indonesia",
            title: "Tropical Island Bliss",
            src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
        },
        {
            city: "Santorini",
            country: "Greece",
            title: "Blue Domes & Sunset Views",
            src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
        },
        {
            city: "New York",
            country: "USA",
            title: "Skyscrapers & Times Square",
            src: "https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1200&auto=format&fit=crop"
        },
        {
            city: "Dubai",
            country: "UAE",
            title: "Futuristic Desert Oasis",
            src: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1200&auto=format&fit=crop"
        },
        {
            city: "Reykjavik",
            country: "Iceland",
            title: "Northern Lights Magic",
            src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop"
        }
    ]

    return (
        <div className="relative overflow-hidden w-full h-full py-20">
            <h2 className="text-center p-4 text-lg font-extrabold"> Popular Destination to visit</h2>
            <Carousel slides={slideData} />
        </div>
    );
}
