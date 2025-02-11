<script setup lang="ts">
</script> 

<template>
    <div class="Contact-page">
        <div class="Contact-Info">

            <h1 class="contact-title">Contact Us</h1>
            <div class="aboutParagraph">
                <p>At Hayden's Supermarket, we value your feedback and are here to assist you with any questions, concerns, or suggestions you may have. 
                    Whether you need help with a recent purchase, want to learn more about our products, or simply have a question, we're happy to help! 
                    Please don't hesitate to reach out to us via the phone number or email address listed below. 
                    Our team is dedicated to ensuring your shopping experience is as smooth and enjoyable as possible. 
                    Thank you for choosing Hayden's Supermarket we're here for you! </p>
                <p>Phone number: 1-800-Haydens-Supermarket</p>
                <p>Email address: customerservice@haydenssupermarket.com</p>
                
            </div>

            <!-- <h2 class="section-title">Customer Service</h2>
            <div class="aboutParagraph">
                <p>
                    At Hayden's Supermarket, our mission is to enrich the lives of our community by offering fresh, high-quality
                    products at fair prices. We strive to create a welcoming environment where every customer feels valued
                    and every visit is a positive experience. We believe in supporting local farmers, promoting sustainability,
                    and making a difference in the lives of our neighbors.
                </p>
            </div> -->

            <h2 class="section-title">Visit Us</h2>
            <div class="aboutParagraph">
                <p>
                    Looking to visit us in person? 
                    We'd love to see you! Hayden's Supermarket is conveniently located in the heart of the Dallas community in Oak Lawn, where we  
                    offer a wide selection of fresh produce, local products, and all your grocery essentials. 
                    Our friendly team is always ready to assist you during your shopping experience. 
                    Feel free to stop by, browse our aisles, and let us help make your next grocery run a breeze. 
                    We look forward to welcoming you soon!
                </p>
            </div>
        </div>
    </div>
</template>

<style>
.Contact-page{
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    padding: 20px;
}

.Contact-Info{
    /* text-align: center;
    align-items: center; */
    /* width: 100%;
    max-width: 1500px; */
    text-align: left;
    line-height: 1.33;


}

.title-container{
    text-align: center;
    
}
.contact-title{
    background-color: #f1f1f1;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
}
.aboutParagraph{
    width: 100%;
    max-width: 1250px;
    font-size: large;
}
.aboutParagraph p{
    /* font-size: 1.125 rem; */
    margin-bottom: 20px;
    text-indent: 1.5rem;
}

.section-title{
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 15px;
    text-align: left;
}
</style>