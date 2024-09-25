"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay"




const testimonials = [
    {
      "name": "Sarah Johnson",
      "role": "Marketing Manager",
      "content": "Schedulrr has transformed how I manage my team's meetings. It's intuitive and saves us hours every week!",
      "image": "https://i.pravatar.cc/150?img=1"
    },
    {
      "name": "David Lee",
      "role": "Freelance Designer",
      "content": "As a freelancer, Schedulrr helps me stay organized and professional. My clients love how easy it is to book time with me.",
      "image": "https://i.pravatar.cc/150?img=2"
    },
    {
      "name": "Emily Chen",
      "role": "Startup Founder",
      "content": "Schedulrr streamlined our hiring process. Setting up interviews has never been easier!",
      "image": "https://i.pravatar.cc/150?img=3"
    },
    {
      "name": "Michael Brown",
      "role": "Sales Executive",
      "content": "I've seen a 30% increase in my meeting bookings since using Schedulrr. It's a game-changer for sales professionals.",
      "image": "https://i.pravatar.cc/150?img=4"
    },
    {
      "name": "Jessica Smith",
      "role": "HR Specialist",
      "content": "Schedulrr has simplified our internal scheduling process. It's easy to use and has become an essential tool in our office.",
      "image": "https://i.pravatar.cc/150?img=5"
    },
    {
      "name": "James Williams",
      "role": "Project Manager",
      "content": "Managing multiple client meetings was a nightmare before Schedulrr. Now, it’s all automated, and I can focus on my work.",
      "image": "https://i.pravatar.cc/150?img=6"
    },
    {
      "name": "Olivia Martinez",
      "role": "Event Planner",
      "content": "Schedulrr has completely changed how I organize events. Booking clients and team meetings is a breeze now.",
      "image": "https://i.pravatar.cc/150?img=7"
    },
    {
      "name": "Alexander Green",
      "role": "Tech Support Specialist",
      "content": "Our support team now uses Schedulrr to manage appointments with customers. It's efficient and saves us a lot of back-and-forth.",
      "image": "https://i.pravatar.cc/150?img=8"
    },
    {
      "name": "Sophia Wilson",
      "role": "Fitness Coach",
      "content": "Schedulrr has made it so easy for my clients to book sessions with me. My business runs smoother than ever!",
      "image": "https://i.pravatar.cc/150?img=9"
    },
    {
      "name": "Robert Carter",
      "role": "Consultant",
      "content": "I've been able to increase my consulting hours thanks to Schedulrr. It's a must-have tool for professionals like me.",
      "image": "https://i.pravatar.cc/150?img=10"
    }
  ];
  

const TestimonialsCarousel = () => {
  return (
    <Carousel
    plugins={[
      Autoplay({
        delay: 5000,
      }),
    ]}
    className="w-full mx-auto"
  >
    <CarouselContent>
      {testimonials.map((testimonial, index) => (
        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
          <Card className="h-full">
            <CardContent className="flex flex-col justify-between h-full p-6">
              <p className="text-gray-600 mb-4">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center mt-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
  );
};

export default TestimonialsCarousel;
