import './styles/OutputCV.css'

export default function OutputCV({fullName}) {
  
    

    return (
        <div className="container">
            <div className="output-content">
                <header>
                    <h1>Lorem Ipsum</h1>
                    <h3>Junior Software Engineer</h3>
                </header>
                <main>
                    <div className="left-side">
                        <div className="cv-personal">
                            <h4>Personal Info</h4>
                            <div>
                                <label htmlFor="cv-email">Email</label><br/>
                                <input type="text" id="cv-email" name ="cv-email" readOnly value='shoooo@mai.com' />
                            </div>
                            <div>
                                <label htmlFor="cv-phone">Phone</label><br/>
                                <input type="text" id="cv-phone" name ="cv-phone" readOnly/>
                            </div>
                            <div>
                                <label htmlFor="cv-dob">Date of birth</label><br/>
                                <input type="text" id="cv-dob" name ="cv-dob" readOnly/>
                            </div>
                        </div>
                        <div className="cv-skills">
                            <h4>Skills</h4>
                            <p>gjhdfghskjdf gajsh, gfjhhg , ghdjfghdk, jhfkfadhfk, fhjahfka, ajhsdkhaskjdhaja, gsjh gkjsh, gjkshfk</p>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="cv-experience">
                            <h4>Work History</h4>
                            <ul>
                                <li>
                                    <div className="from-to">04/23 - 05/24</div>
                                    <div className="exp-content">
                                        <div className="exp-title">Bartender</div>
                                        <div className="exp-company">The Birchwood, Saint Pete, FL</div>
                                        <div className="exp-duties">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Urna neque viverra justo nec ultrices dui sapien eget. Maecenas accumsan lacus vel facilisis volutpat est. Nec feugiat nisl pretium fusce.</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="from-to">04/23 - 05/24</div>
                                    <div className="exp-content">
                                        <div className="exp-title">Bartender</div>
                                        <div className="exp-company">The Birchwood, Saint Pete, FL</div>
                                        <div className="exp-duties">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Urna neque viverra justo nec ultrices dui sapien eget. Maecenas accumsan lacus vel facilisis volutpat est. Nec feugiat nisl pretium fusce.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="cv-education">
                            <h4>Education</h4>
                            <ul className='edu-list'>
                                <li>
                                    <div className="from-to">04/23 - 05/24</div>
                                    <div className="education-content">
                                        <div className="cv-degree">Full-stack web development</div>
                                        <div className="cv-school-location">University of Florida, Dunedin, FL</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="from-to">04/23 - 05/24</div>
                                    <div className="education-content">
                                        <div className="cv-degree">Full-stack web development</div>
                                        <div className="cv-school-location">University of Florida, Dunedin, FL</div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}