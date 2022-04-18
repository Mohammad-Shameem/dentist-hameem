import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <h2 className='mb-2 mt-3'>Questions</h2>
            <div className='questions-line  mx-auto'></div>
            <div>
                <h4>Diffrence Between Authorization and Authentication</h4>
                <p>Simply put, authentication is the process of verifying who someone is, <br />
                    whereas authorization is the process of verifying what specific applications, <br />
                    files, and data a user has access to. The situation is like that of an airline <br />
                    that needs to determine which people can come on board.</p>
            </div>
            <div>
                <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p> Actually Firebase easy to use and more secure to protect and authentcate <br />
                    a web application.Firebase Authentication aims to make building secure <br />
                    authentication systems easy, while improving the sign-in and onboarding <br />
                    experience for end users. It provides an end-to-end identity solution, <br />
                    supporting email and password accounts, phone auth, and Google, Twitter,<br />
                    Facebook, and GitHub login, and more.
                    <br />
                    There is lot more way to Authenticate a web applications,some of them are:- <br />
                    * Cookie-Based authentication. <br />
                    * Token-Based authentication.<br />
                    * Third party access(OAuth, API-token)<br />
                    * OpenId.<br />
                    * SAML.

                </p>
            </div>
            <div>
                <h4>What other services does firebase provide other than authentication</h4>
                <p>
                    * Realtime Database <br />
                    * Cloud Messagin <br />
                    * Storage <br />
                    * Hosting <br />
                    * Remote Config <br />
                    * Test Lab <br />
                    * Crash Rporting <br />
                </p>
            </div>
        </div>
    );
};

export default Blogs;