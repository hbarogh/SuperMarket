<script setup lang="ts">
</script> 

<template>
    <div class="AboutPage">
        <div class="aboutInfo">

            <h1 class="about-title">About Us</h1>
            <div class="aboutParagraph">
                <p>Welcome to Hayden's Supermarket, your trusted neighborhood grocery store located in the heart of Dallas, Texas. 
                    Since our founding, we've been committed to providing our community with the freshest produce, high-quality goods, and exceptional customer service. 
                    At Hayden's, we believe that shopping for your family's needs should be convenient, enjoyable, and affordable. We proudly source many of our products from local farmers and suppliers, 
                    ensuring that our shelves are stocked with the best our region has to offer. Whether you're looking for everyday essentials or specialty items, our team is here to help you find exactly
                     what you need. Thank you for choosing Hayden's Supermarket—we're honored to serve you and be a part of your story. </p>
                
            </div>

            <h2 class="section-title">Our Mission</h2>
            <div class="aboutParagraph">
                <p>
                    At Hayden's Supermarket, our mission is to enrich the lives of our community by offering fresh, high-quality
                    products at fair prices. We strive to create a welcoming environment where every customer feels valued
                    and every visit is a positive experience. We believe in supporting local farmers, promoting sustainability,
                    and making a difference in the lives of our neighbors.
                </p>
            </div>

            <h2 class="section-title">Our History</h2>
            <div class="aboutParagraph">
                <p>
                    Hayden's Supermarket started as a small, family-owned grocery store in Dallas in 1995. Over the years, we've grown
                    alongside our community, but our values have remained the same—delivering excellent service and quality products
                    with a personal touch. From humble beginnings to becoming a cornerstone of the neighborhood, our journey is a testament
                    to the trust and loyalty of our customers.
                </p>
            </div>
        </div>
    </div>
</template>

<style>
.AboutPage{
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    padding: 20px;
}

.aboutInfo{
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
.about-title{
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