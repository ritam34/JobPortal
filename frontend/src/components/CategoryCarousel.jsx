import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';


const category = [
    "Frontend Developer",
    "Backend Developer",
    "FullStack Developer",
    "Mobile App Developer",
    "DevOps Engineer",
    "Data Scientist",
    "Data Analyst",
    "Machine Learning Engineer",
    "AI Specialist",
    "Cloud Engineer",
    "Cybersecurity Specialist",
    "Game Developer",
    "UI/UX Designer",
    "Graphic Designer",
    "Web Designer",
    "Product Manager",
    "Project Manager",
    "Quality Assurance Engineer",
    "Software Tester",
    "Database Administrator",
    "IT Support Specialist",
    "Network Engineer",
    "Blockchain Developer",
    "Embedded Systems Engineer",
    "AR/VR Developer",
    "Technical Writer",
    "SEO Specialist",
    "Digital Marketing Specialist",
    "Content Creator",
    "E-commerce Specialist"
];


const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div>
            <Carousel className="w-full max-w-xl mx-auto my-20">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem className="md:basis-1/3 lg-basis-1/5">
                                <Button onClick={()=>searchJobHandler(cat)} variant="outline" className="rounded-full">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel