# e-commerce-website-using-MERN

e-commerce website created using MERN stack with three modules: frontend, backend, and admin:
Frontend:
Implemented using components, pages, and context to manage the user interface and state.
Utilized context to handle logic for cart items, including saving, removing, and fetching products from the backend.
Implemented authentication check to verify user authentication status.
Created components to provide the shop context and share data between components.
Developed pages for cart, login/signup, product details, shop, and shop categories.
The shop page displays new collections and popular products for women fetched from the backend.
Users can view product details and add them to the cart, with all user and product data stored in MongoDB.
The cart page calculates the total number of items in the cart, including items left without checkout.
The shop category page displays products categorized by men, women, and kids, fetched from the backend.
Backend:
Established database connection with MongoDB Atlas.
Implemented file uploading using Multer.
Created schemas for product and user models.
Developed APIs for adding, deleting, and retrieving products.
Implemented APIs for user registration and authentication, generating and verifying tokens.
Created APIs for fetching new collections and popular products in the women's section.
Implemented APIs for managing cart functionality, including adding, removing, and retrieving cart data.
Admin:
Created using Vite for efficient development.
Admin can add, view, and delete products from the database.
Provides a user-friendly interface for managing product inventory.
