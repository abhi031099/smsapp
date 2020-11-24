import React from 'react'

const About = () =>{
    return(
        <div className="parallax-container">
            <div className="parallax">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcHDRANBwcHBwcNDQ0NBwcHBw8IDQcNFREWFhURHxUYHCggGBolJxMVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NFQ0NDisdFRkrKysrKysrKysrKystKystKysrKysrKysrKysrLSsrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAEAwAFAgf/xAAZEAEBAQEBAQAAAAAAAAAAAAAAAgMBMUH/xAAYAQEBAQEBAAAAAAAAAAAAAAACAwABBP/EABYRAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEQMRAD8A+X5kQPBELR4dEZkQPBEHEdEZkQPBGZRHREEQPBEHEdEQRA8EQUS0RBEDwRBxHREEQPBEFEdEZrwhmRBxHS8EQhBGZRHTaD2RY9tWyPY+hFj2NWyPY9kWPYVbI+g9kWPY1bI9j6EWPYVbI9j2RY9jVcj6D2RoPYVbKFj2RY2g1bKFj2vaFhVsj2h1a0aGqw+CMx4IzKJaXgmB8yIOI6XgjNDNfMojomF4QgiDiOl8yM0M14KJaIgjNCF4OI0iCIHgiCiOiIIgeCIOI6IgiB4IgojptB7Xse2rZHseyLHsKtlCx7Isaxq2ULHte0LGrZHseyLH0CrZHseyLHsarkex9CNB9Aq2R7H0IsfQavkfQeyNB7Cq5H0Rpa0KGqx0IIgeCIKJaIzIgfMiDiOiMyMx4IzKI6IgiB4Ig4jojMiB4IzKI6IgjMeCMziOl4JgeCIKJaIheEIXg4joiCIHgmCiNebHsix7au5HsfQix7Cq5HseyNB7GrZHtC17Hsatkex7Isewq2ULHtex7Cq5H0Q0X0HsavlCx7Isaxq2ULHte0LCq5HtCl7QoatHRheEIIgohpfMiEMyIOJaXzIzHzIzKI6IgjMfMjM4jojMiB8yIKI6IgjMeCMziOiIIgfMiCiWiMyIHgiDiOiIIgeCIKI150HtfQe2ruULHtex7Cq5Q0HsixrGr5QseyLHsKrkex9CLH0FbI9j2RY9hVsj6D6EWPoNWyPY9kWPoFWyPY9kWPY1XI9o0taFejVo6UEZjwRBxDRGZED5kQUS0RBGY8EZlEdEQRA8EQcRpGa8IZkZnEdEQvCEEZlEdL5kQPmTBRHS8EQPBEHEdEQRA8EQUS08aD2RoPo1dg9j2RY9hVoPY9kWPY1bI9oWvY9hVcoWPovY9jVsoWPa+g9hVsoWPovY9jVsoWPZGg9hVsj2PZFj2NWyPohXq9odGqx0oIhCCIOIaXzIhDNeCiWiIIzHgjMohoiCIHgiDiWiIIgeCMziOiIIgeCIKI6IgiB8yIOI6IgiB4IgojoiF5QheSiWnjQe19B9GruULHte0NAq2R9B7Isexq2R7Hsix9AquR7Hsix7GrZHseyLHsKtkex9CLHsatlDQayLHsKtlCx7Xsexq2ULQpa0ejVY6cEQPBEHENEZkQPmRBRHREEQPBGZxHS8EwPmRBRLRGa+aGa8HEdEQRCELwUR0RmRA+ZEHEdEQRmPBGZRGkQvPiELz4USqeg9kaD21dg9oWvY9hVsoWNZGg9jVsoWPovY9hVsoWPZFjWK2ULHsix7Cq5HseyLHsatkex9CLHsKtkex7Isexq2R7R6taHRVjqQRA8EQcQ0RmRCGa8FEdEQRmPBGZxHRGZED5kQUR0RBGY8EZnEtEQRA8EQUR0RmRA+ZEHEdEQRmPBGZRGrwRPiEL88KI1LQeyNB9GpZHseyLH0CrZH0HsjQexq2R7H0IsfQKtkex7Isexq2R7QtfQewquR7Hsix7GrZQseyLGsKtlDQe19ELGrZHtDq9odFWOrBEDwRBxCkZrwhmRBRHS8E5jwRmcR0vBEIQvBRHREEZoQvmcR0RBEDwRBRLRGZED5kQcR0RBGY8EZlEdEQvzxCF+eEjUdENF9B9HKeULHtex7Gq5Qse19B7GrZQsfRe0NAq2R7Hsix7GrZHseyNB9AquR7Hsix7Gr5HseyLHsKtkex7IsexquR7Q6vaHQq0daCIHgiFI8+iMyIHzIgojoiCIHgjM4jojMiB8yMyiNIgjMeCMziOiIIgeCIKJaXzJgfMiDiOl4IzQgjMojpfNf4hmv8JGo6D6EaD6OU4PY9kWPY1XI+g9kaD2FWyPY+hFj6DVsj2PZFj2NWyPohovoPoFWyhY9r2PY1bKFj2RY1hVsoWPa9oWNVyPaHV7QoKtHWgiGZSPPomF4ZiiOiIIzZjiOiMyM2YojoiCM2Y4joiCIZiiNIzIhmOI6IzIzZiiWiM1vjMSNQ0Q0ZnKeR7HtmGrZH0HtmCrZHsfRmGq5Hse2YatkfQe2YKtkex7Zhq2R7HtmBbI9j2zDVcj2hTMFWj//2Q==" alt="bg" className=".yosha1"></img>
            </div>
            <h3 className="white-text center">About</h3>
            <div className="container">
            <p>this website is aimed at blah blah blah</p>
            <h4 className="white-text center">Members</h4>
            <div className="row">
                <div className="col s6">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Aakash Kumar</span>
                            <p>Details pls</p>
                        </div>
                    </div>
                </div>
                <div className="col s6">
                <div className="card">
                        <div className="card-content">
                            <span className="card-title">Abhishek Sharma</span>
                            <p>Details pls</p>
                        </div>
                    </div>
                    </div>
                    <div className="col s6">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Aditya Mishra</span>
                            <p>Details pls</p>
                        </div>
                    </div>
                    </div>
                    <div className="col s6">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Raghav Khanna</span>
                            <p>Details pls</p>
                        </div>
                    </div>
                    </div>
            </div>
            </div>
            
        </div>
    )
}

export default About;