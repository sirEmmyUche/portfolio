import {createServer, Model}from "miragejs"

createServer({
    models: {
      project: Model,
    },
  
    routes() {
      this.namespace = "api/"
  
      this.get("projects", (schema, request) => {
        return schema.projects.all()
      });

      this.get("projects/:id", (schema, request) => {
        const id = request.params.id;
        return (schema.projects.find(id))
      });

      this.passthrough("https://formspree.io/f/mwkdlbyq")
      
    },
  
    seeds(server) {
      server.create("project", {id:"1",
        name: "HIMS",
        imgUrl:"/images/hims.png", 
        link:"https://house-verification-system.vercel.app/",
        description:`Housing Information Management System (HIMS) is a web app designed to provide great solution for 
        reducing fraud and theft in the real estate industry.
         By providing users with a quick and easy way to verify the real-time owner of a property,
        it helps to ensure that buyers are not being scammed. The app also includes an image of the property,
         which can be helpful for buyers who are looking to purchase a home sight unseen.
        The app is built on a secure and reliable platform, and it is easy to use. 
        Users simply enter the address of the property they are interested in, 
        and the app will return the name and contact information of the owner. 
        The app also includes a feature that allows users to report fraudulent listings.
        This app is a valuable tool for both buyers and sellers in the real estate market. 
        It helps to protect buyers from being scammed, 
        and it provides sellers with a way to verify the identity of potential buyers.`,
      isMobile:false}),

        server.create("project",
          {id:"2",
            name:"shotIt",
            imgUrl:"/images/link-shortening-app.png",
            link:"https://link-shortener-six-iota.vercel.app/",
          description:`This web app is a simple and effective way to shorten long links.
           It is a great tool for marketers who want to make their links more concise and easy to remember. 
           The app also includes a feature that allows users to track the number of clicks on their shortened links.
          The app is easy to use. Users simply paste the long link they want to shorten into the app, 
          and it will generate a short link. The short link can then be shared with others.
          This app is a great way to improve the click-through rate of your marketing campaigns.
           By shortening your links, you make them more memorable and easier to share. 
           This can lead to more clicks on your links, which can ultimately lead to more sales.`,
           isMobile:false}
        )
        
            server.create("project",
              {id:"3",
              name:"Mobile App E-Commerce",
        imgUrl:"/images/e-commerce-mobile-app.png",
      link:"#",
    description:`This mobile app is a great way for users to purchase goods and services online.
     It is easy to use and convenient.
    The unique feature about it is that it allows users to pay by installment for whatever goods they are purchasing.
    The app includes a wide variety of products and services, from clothes and electronics to food and groceries.
     Users can browse the app's catalog, add items to their cart, and checkout with just a few taps. 
     The app also includes a delivery feature, so users can have their purchases delivered right to their door.
    This app is a great way for users to shop from the comfort of their own homes. 
    It is convenient, easy to use, and it offers a variety of payment options.`,
  isMobile:true}    
        )
    },
  })






