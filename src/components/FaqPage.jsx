import React from 'react'
import Nav from './Nav'

const FaqPage = () => {
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="question" className="form-label" >Type a Question</label>
                                <textarea name="" id="" cols="30" rows="10" class="form-control" placeholder="Enter your Questions here..."></textarea>

                                <br />
                                <button className="btn btn-primary">Submit</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h4>Frequently Asked Questions (FAQ)</h4>
                                <br />
                                <h5>1. How do I borrow books using LibriConnect?</h5>
                                <p>To borrow books through LibriConnect, simply search for the desired title using the search bar, select the book you wish to borrow, and follow the prompts to complete the borrowing process. You can borrow both physical books from your local library and e-books directly through the app.</p>
                                <h5>2. Can I renew borrowed items?</h5>
                                <p>Yes, you can renew borrowed items through LibriConnect. Simply navigate to your account settings, view your borrowed items, and select the option to renew. Please note that renewal policies may vary depending on your library's regulations.</p>
                                <h5>3. How can I receive notifications about upcoming library events?</h5>
                                <p>To receive notifications about upcoming library events, ensure that notifications are enabled in your app settings. You can customize your notification preferences to receive alerts about events, workshops, author visits, and more.</p>
                                <h5>4. Is LibriConnect available offline?</h5>
                                <p>Yes, many features of LibriConnect are available offline. You can download e-books and audiobooks to read or listen to offline, access your borrowed items, and browse your personal library catalog without an internet connection. However, certain features, such as real-time search and updates, require an internet connection.</p>
                                <h5>5. How do I share my thoughts on books?</h5>
                                <p>To share your thoughts on books, navigate to the book's details page in the app and select the option to leave a review or rating. You can also read reviews from other users and engage in discussions within the LibriConnect community.</p>
                                <h5>6. Can I access LibriConnect on multiple devices?</h5>
                                <p>Yes, you can access LibriConnect on multiple devices. Simply log in to your account using your credentials, and your account information, borrowed items, and preferences will sync across all devices.</p>
                                <h5>7. Is LibriConnect suitable for children?</h5>
                                <p>LibriConnect offers parental control features to ensure a safe and appropriate reading environment for children. Parents can set up controls to restrict access to certain content and customize settings to suit their family's needs.</p>
                                <h5>8. How do I integrate my library card with LibriConnect?</h5>
                                <p>To integrate your library card with LibriConnect, navigate to your account settings and select the option to add a library card. Follow the prompts to enter your library card information, and your card will be integrated with the app for seamless access to library resources.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqPage
