import React from 'react'
import Nav from './Nav'

const HomePage = () => {
    return (
        <div>
            <Nav/>
            <div className="container">
                <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggTu7DsNwN06djRJalUksB-4Ev7Od5gqiLK3tGUianJl7nbaRoUcOpxpOSlfVMmt4l2bBQejcsUfEqP_AJp0j_fZDzXftR7fz_wZ2-SBFA1NaaFVBSVQAyMZR6NJO14iRApHY7mW5NYbg/w1200-h630-p-k-no-nu/Library.png" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://th-i.thgim.com/public/incoming/8xtjp4/article66982931.ece/alternates/FREE_1200/Coimbatore%20district%20library%203.jpg" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCJpL82gh1BcutjLfYmIuEeBuCUVcIf7c71A&s" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <br />
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12 col-xxl-12">
                            <h1>WELCOME</h1>
                            <p>Welcome to the LibriConnect, your gateway to a world of knowledge and adventure! Whether you're a book lover, a student, or just looking for your next great read, our app is designed to make discovering, borrowing, and enjoying books easier than ever. Dive into our extensive collection, explore curated recommendations, and manage your library account seamlessly from your device. Join our community of readers and let your journey through literature begin today! Happy reading!</p>
                        </div>

                        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6 col-xxl-6">
                            <div class="row row-cols-1 row-cols-md-3 g-4">
                                <div class="col">
                                    <div class="card h-60">
                                        <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRggezrJrSnFAgS6JbleT1PWfb4fw7iUxiSKwwke3Qc_PoPf_NZiu9q2FS8O4fYZwIxXQugsPksZx63yE9axH0ertXLP3-cA2Rg4AIxNusP0FoS7YZeaC0V&usqp=CAE" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title"></h5>
                                            <p class="card-text">
                                                <button className="btn btn-primary">Preview Only</button>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-60">
                                        <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT3yRFcprRj7VwNBTloHp_UtamD1aidNpP4J-Fma8i2W39tDrisETol4r7Xb_gk_ZG6ndyAShF37NQ5LASATiKJJv10K1UjcTUXwAenLkYS&usqp=CAE" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title"></h5>
                                            <button className="btn btn-primary">Read</button>
                                        </div>

                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-60">
                                        <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTE2OxXgSI69u4tEPvy6UL02Q_aQ9IA7couHz1XonhEmlnsHkKKL7O7MBEbIYxkfRgX4kNf__GoIKQ7wBqtj6xNaB1LRrNft7pK58q6yy0o9fsB4zWpLDRUKw&usqp=CAE" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <button className="btn btn-primary">Borrow</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6 col-xxl-6">
                            <div class="row row-cols-1 row-cols-md-3 g-4">
                                <div class="col">
                                    <div class="card h-60">
                                        <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSeLthopUb_ctMR7iomL_aKufUTZ91qf5Do_hXUu1gjw7LUdSL6z--Er2S20NmBkAjNjd1OKChfg1p1YOI5mVGzeTPySwPrFQJybHpbJtHi5nmwXQ7w0N18&usqp=CAE" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title"></h5>
                                            <p class="card-text">
                                                <button className="btn btn-primary">Borrow</button>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-60">
                                        <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTfZGn3xaUomuOH_aX3yzXq6jjOsloepKDuRpUeObPg9QgXPUAZ33aX3QWSueDmhfcD14MlSRRL5iBnsBNv9MRqR7nXJ6n-PveLOD-Kt_Q&usqp=CAE" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <button className="btn btn-dark">Not In Library</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card h-100">
                                        <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ-pl0YytAeZfFcoe-KglF7V3ftVZSJBVeYjJ32w04k-8airrfm87nYTU4YYQ88wlKuVOh-VN4r6iugw6oY05j5OCmX0LmJmb_ZDmO1Oq8&usqp=CAE" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <button className="btn btn-primary">Read</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12 col-xxl-12">
                            <h3>Features</h3>
                            <p>Search and Discover: Effortlessly search for books, e-books, journals, and other resources across multiple libraries. Our advanced search algorithms ensure you find exactly what you're looking for in no time. </p>

                            <p>   Personalized Recommendations: Get tailored book recommendations based on your reading history and preferences. Discover new favorites and hidden gems curated just for you. </p>

                            <p>   Digital Borrowing: Borrow e-books and audiobooks directly through the app. Enjoy your favorite titles on the go, without the need to visit the library in person. </p>

                            <p>  Account Management: Keep track of your borrowed items, due dates, and fines with ease. Renew or reserve books with a single tap, ensuring you never miss out on a must-read. </p>

                            <p>   Event Notifications: Stay updated on library events, workshops, and author visits. Receive notifications about upcoming activities and never miss an opportunity to engage with your local library community. </p>

                            <p>   Interactive Catalogs: Explore interactive catalogs featuring detailed book descriptions, reviews, and ratings. Make informed decisions on what to read next. </p>

                            <p>   Offline Access: Download e-books and audiobooks to read or listen offline, perfect for commutes, travel, or areas with limited internet access.</p>
                            <br />
                            <h4>Join the LibriConnect community today and transform the way you interact with your library. Discover, borrow, and enjoy the world of literature like never before!</h4>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
