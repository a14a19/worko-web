import React from 'react'
import { Link } from "react-router-dom";

function IntegrationHomeCard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 mx-auto tables-columns">
            <Link to="/integrations/medium">
                <div className="outer-div flex flex-cols justify-start" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }}>
                    <div className="feature-icon flex justify-start items-center">
                        <div className="image-holder flex justify-center items-center">
                            <div className="image-icon flex justify-center items-center">
                                <div className="flex justify-center items-center">
                                    <img className="img-container" src="https://framerusercontent.com/images/KdEfpxCHd96fylnTMKzni4zL1U.svg" alt="images" />
                                </div>
                            </div>
                        </div>
                        <span className="mx-3 text-gray-300 font-semibold">
                            Medium
                        </span>
                    </div>
                    <div className="mt-2">
                        <p className="p text-left text-gray-500 font-semibold">
                            Worko's Medium integration enhances content management.
                        </p>
                    </div>
                </div>
            </Link>
            <Link to="/integrations/patreon">
                <div className="outer-div" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }}>
                    <div className="feature-icon flex justify-start items-center">
                        <div className="image-holder flex justify-center items-center">
                            <div className="image-icon flex justify-center items-center">
                                <div className="flex justify-center items-center">
                                    <img className="img-container" src="https://framerusercontent.com/images/bdD8iT5T5scUFk4UpNbygYMU4.svg" alt="images" />
                                </div>
                            </div>
                        </div>
                        <span className="mx-3 text-gray-300 font-semibold">
                            Patreon
                        </span>
                    </div>
                    <div className="mt-2">
                        <p className="p text-left text-gray-500 font-semibold">
                            Worko's Patreon integration provides strong support.
                        </p>
                    </div>
                </div>
            </Link>
            <Link to="/integrations/slack">
                <div className="outer-div" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }}>
                    <div className="feature-icon flex justify-start items-center">
                        <div className="image-holder flex justify-center items-center">
                            <div className="image-icon flex justify-center items-center">
                                <div className="flex justify-center items-center">
                                    <img className="img-container" src="https://framerusercontent.com/images/fi6YZVIWF4vUX87DH7ByL1SIZk.svg" alt="images" />
                                </div>
                            </div>
                        </div>
                        <span className="mx-3 text-gray-300 font-semibold">
                            Slack
                        </span>
                    </div>
                    <div className="mt-2">
                        <p className="p text-left text-gray-500 font-semibold">
                            Effortlessly centralize team communication and boost.
                        </p>
                    </div>
                </div>
            </Link>
            <Link to="/integrations/notion">
                <div className="outer-div" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }}>
                    <div className="feature-icon flex justify-start items-center">
                        <div className="image-holder flex justify-center items-center">
                            <div className="image-icon flex justify-center items-center">
                                <div className="flex justify-center items-center">
                                    <img className="img-container" src="https://framerusercontent.com/images/GmMHJ6xyjsvJDQfFlslLI6c1SQ.svg" alt="images" />
                                </div>
                            </div>
                        </div>
                        <span className="mx-3 text-gray-300 font-semibold">
                            Notion
                        </span>
                    </div>
                    <div className="mt-2">
                        <p className="p text-left text-gray-500 font-semibold">
                            Customize versatile workspaces to enhance project
                            management.
                        </p>
                    </div>
                </div>
            </Link>
            <Link to="/integrations/stackoverflow">
                <div className="outer-div" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }}>
                    <div className="feature-icon flex justify-start items-center">
                        <div className="image-holder flex justify-center items-center">
                            <div className="image-icon flex justify-center items-center">
                                <div className="flex justify-center items-center">
                                    <img className="img-container" src="https://framerusercontent.com/images/yk5PFJNqpmnxdVsGjZKJopLI0.svg" alt="images" />
                                </div>
                            </div>
                        </div>
                        <span className="mx-3 text-gray-300 font-semibold">
                            Stack overflow
                        </span>
                    </div>
                    <div className="mt-2">
                        <p className="p text-left text-gray-500 font-semibold">
                            Join a thriving developer community for coding solutions.
                        </p>
                    </div>
                </div>
            </Link>
            <Link to="/integrations/teams">
                <div className="outer-div" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }}>
                    <div className="feature-icon flex justify-start items-center">
                        <div className="image-holder flex justify-center items-center">
                            <div className="image-icon flex justify-center items-center">
                                <div className="flex justify-center items-center">
                                    <img className="img-container" src="https://framerusercontent.com/images/fCglyxryD2zJfPIeaHmCEgl3aIs.svg" alt="images" />
                                </div>
                            </div>
                        </div>
                        <span className="mx-3 text-gray-300 font-semibold">
                            Microsoft teams
                        </span>
                    </div>
                    <div className="mt-2">
                        <p className="p text-left text-gray-500 font-semibold">
                            Empower teamwork, streamline collaboration, and enhance.
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default IntegrationHomeCard