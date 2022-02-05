import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Home() {
    
    return (
        <div className="HomeScreen">
            <div className="top">
                <div className="background">
                    <Header selected="Home" />
                    <div className="top_main">
                        <div className="top_content">
                            <div className="content_title">Collect and earn on <font color="#216AF5">NFT<img src="/image/top_img1.png" /></font> bubbles</div>

                            <div className="content_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis no.</div>
                            <div className="content_btnGroup">
                                <div className="purchaseBtn">Purchase</div>
                                <div className="learnMore">Learn More</div>
                                <img src="/image/top_img2.png" />
                            </div>
                        </div>
                        <div className="bubble_video">
                            <div className="video_img">
                                <img src="/image/bubble_video.png" alt="" />
                                <img src="/image/videoPlay.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content1">
                <div className="content1_item">
                    <div className="content_icon">
                        <img src="/image/brush.svg" alt="" />
                    </div>
                    <div className="title">Art & Technology</div>
                    <div className="content">DNA of each bubble consists of 12000  attributes. The result is billions of unique characters</div>
                </div>

                <div className="content1_item">
                    <div className="content_icon">
                        <img src="/image/discount-circle.svg" alt="" />
                    </div>
                    <div className="title">50% to NFT owners forever</div>
                    <div className="content">DNA of each bubble consists of 12000  attributes. The result is billions of unique characters</div>
                </div>

                <div className="content1_item">
                    <div className="content_icon">
                        <img src="/image/vs_img.png" alt="" />
                    </div>
                    <div className="title">First NFT battles</div>
                    <div className="content">Battle on Arena and win Ethereum or NFT dragon</div>
                </div>
            </div>

            <div className="buyContent">
                <div className="buyContent1">
                    <div className="title">Special prices for $SLM buyers</div>
                    <div className="text">For now we accept different crypto tokens, but for those who pays with $SLM, we’ll offer special prices and discounts.<br /><br />
                        If you’re interested in purchasing of few bubbles, you can visit <font color="#216AF5">SlamWallet</font> and get some $SLM.<br /><br />
                        Hurry up, they’re growing up extremely fast!</div>
                    <div className="getSLM">Get $SLM</div>
                </div>
                <div className="buyContent2">
                    <img src="/image/iphone.png" alt="" />
                </div>
            </div>

            <div className="content2">
                <img src="/image/img1.png" alt="" />
                <div className="content">
                    <div className="title">Our advertise was shown on Times Square</div>
                    <div className="text">Recently we rented banners on Times Square and showed our product to thousands of people. So, hurry up! There’re plenty of wishing customers to buy Bubbles.<br /><br />Become one of the luckiest!</div>
                </div>
                <img src="/image/img2.png" alt="" />
            </div>

            <div className="content3">
                <img src="/image/img3.png" alt="" />
                <div className="content">
                    <div className="title">How much your Legendary Character may earn?</div>
                    <div className="mintContent">
                        <div className="title">Legendary Character earning calculator</div>
                        <div className="text">All breeding number in the system</div>
                        <div className="tokenCount">154 000</div>
                        <img src="/image/img4.png" alt="" />
                        <img src="/image/img5.png" alt="" />
                        <div className="valueGroup">
                            <div>100K</div>
                            <div>200K</div>
                            <div>500K</div>
                            <div>1M</div>
                            <div>2M</div>
                            <div>2.5M</div>
                            <div>3M</div>
                            <div>4M</div>
                            <div>5M</div>
                        </div>
                        <div className="text">Earnings</div>
                        <div className="tokenValue">$25,564.56</div>
                        <div className="ethValue">18.3 ETH</div>
                        <div className="mintBtn">Mint a Bubble</div>
                    </div>
                </div>
            </div>

            <div className="content4">
                <img src="/image/img6.png" alt="" />
                <img src="/image/mobile_img6.png" alt="" />
            </div>

            <div className="characterMakeComponent">
                <div className="content">
                    <img src="/image/charactermake.png" alt="" />
                    <div className="makeGroup">
                        <div className="title">Get your 3D Character!</div>
                        <div className="text">If you own 2D version of BubbleX Character, you can get 3D copy of that for abillity to use it in VR BubbleX Metaverse.</div>
                    </div>

                </div>
                <img src="/image/img19.png" alt="" />
            </div>

            <div className="content5">
                <div className="title">Bubble reserve in several steps</div>
                <div className="text">We have developed reservation so there are no gas wars. Reserving a bubble today, means you already own it.</div>
                <div className="contentGroup">
                    <div className="contentItem">
                        <img src="/image/img7.png" alt="" />
                        <div className="text">498 Random sold for <font color="#E539E5">0.15 ETH</font> each</div>
                        <div className="text">1 Epic sold for <font color="#E539E5">1.5 ETH</font></div>
                        <div className="text">1 Legendary sold for <font color="#E539E5">15 ETH</font></div>
                    </div>
                    <div className="contentItem disabled">
                        <img src="/image/img8.png" alt="" />
                        <div className="text">998 Random sold for <font color="#E539E5">0.15 ETH</font> each</div>
                        <div className="text">1 Epic sold for <font color="#E539E5">1.5 ETH</font></div>
                        <div className="text">1 Legendary sold for <font color="#E539E5">15 ETH</font></div>
                    </div>
                    <div className="contentItem disabled">
                        <img src="/image/img9.png" alt="" />
                        <div className="text">498 Random sold for <font color="#E539E5">0.15 ETH</font> each</div>
                        <div className="text">1 Epic sold for <font color="#E539E5">1.5 ETH</font></div>
                        <div className="text">1 Legendary sold for <font color="#E539E5">15 ETH</font></div>
                    </div>
                    <div className="contentItem contentItem1 disabled">
                        <img src="/image/img10.png" alt="" />
                    </div>
                </div>
                <div className="roadMapGroup">
                    <div className="roadMapItem">
                        <img src="/image/roadMap_active.png" alt="" />
                        <div className="roadMapText">Reservation step 1</div>
                    </div>
                    <img src="/image/roadMap_line.png" alt="" />
                    <div className="roadMapItem disabled">
                        <img src="/image/roadMap_disabled.png" alt="" />
                        <div className="roadMapText">Reservation step 2</div>
                    </div>
                    <img src="/image/roadMap_line.png" alt="" />
                    <div className="roadMapItem disabled">
                        <img src="/image/roadMap_disabled.png" alt="" />
                        <div className="roadMapText">Reservation step 3</div>
                    </div>
                    <img src="/image/roadMap_line.png" alt="" />
                    <div className="roadMapItem disabled">
                        <img src="/image/roadMap_disabled.png" alt="" />
                        <div className="roadMapText">Reservation step 4</div>
                    </div>
                </div>
            </div>

            <div className="content6">
                <div className="mainContent">
                    <div className="title">A Bubble today,<br /> a <font color="#E539E5">Character</font> tomorrow</div>
                    <div className="text">The whole SlamCharacters Metaverse will arise from 10Klimited NFT Eggs.</div>
                    <div className="text">Everyone can buy Bubble
                        <div className="buttonGroup">
                            <div className="randomBtn">Random</div>
                            <div className="epicBtn">Epic</div>
                            <div className="legendaryBtn">Legendary</div>
                        </div>
                        with character inside
                    </div>
                    <div className="reserveGroup">
                        <div className="reserveItem">
                            <img src="/image/random.png" alt="" />
                            <div className="titlePanel random">Random</div>
                            <div className="itemPanel">
                                <div className="value">
                                    <div className="ethValue">0.15</div>
                                    <div className="ethText">ETH</div>
                                </div>
                                <div className="textGroup">
                                    <div className="text">From Random Bubbles you may get</div>
                                    <div className="text"><font color="#FFD53F">100</font> - Legendary Characters</div>
                                    <div className="text"><font color="#7AA8FF">1000</font> - Epic Characters</div>
                                    <div className="text"><font color="#CECECE">8,900</font> - Common Characters</div>
                                </div>
                                <div className="valueGroup">
                                    <img src="/image/minusBtn.png" alt="" />
                                    <div className="value">1</div>
                                    <img src="/image/plusBtn.png" alt="" />
                                </div>
                                <div className="text">Maximum 5 bubbles can be reserved per wallet.</div>
                                <div className="totalValueGroup">
                                    <div className="totalText">Total</div>
                                    <div className="ethValue">0.15ETH</div>
                                </div>
                                <div className="reserveBtn">Reserve a Bubble</div>
                                <div className="bubbleValueGroup">
                                    <div className="bubbleValue">237/1000</div>
                                    <div className="bubbleText">Bubbles</div>
                                </div>
                            </div>
                        </div>
                        <div className="reserveItem">
                            <img src="/image/epic.png" alt="" />
                            <div className="titlePanel epic">Epic</div>
                            <div className="itemPanel">
                                <div className="value">
                                    <div className="ethValue">0.85</div>
                                    <div className="ethText">ETH</div>
                                </div>
                                <div className="textGroup">
                                    <div className="text">An Epic Character will hatch from this Bubble. There are 20 Epic Bubbles available for sale.</div>
                                </div>
                                <div className="valueGroup">
                                    <img src="/image/minusBtn.png" alt="" />
                                    <div className="value">1</div>
                                    <img src="/image/plusBtn.png" alt="" />
                                </div>
                                <div className="text">Maximum 5 bubbles can be reserved per wallet.</div>
                                <div className="totalValueGroup">
                                    <div className="totalText">Total</div>
                                    <div className="ethValue">0.15ETH</div>
                                </div>
                                <div className="reserveBtn">Reserve a Bubble</div>
                                <div className="bubbleValueGroup">
                                    <div className="bubbleValue">237/1000</div>
                                    <div className="bubbleText">Bubbles</div>
                                </div>
                            </div>
                        </div>
                        <div className="reserveItem">
                            <img src="/image/legendary.png" alt="" />
                            <div className="titlePanel legendary">Legendary</div>
                            <div className="itemPanel">
                                <div className="value">
                                    <div className="ethValue">12</div>
                                    <div className="ethText">ETH</div>
                                </div>
                                <div className="textGroup">
                                    <div className="text">A Legendary Character will hatch from this Bubble. There are 10 Legendary Bubbles available for sale.</div>
                                </div>
                                <div className="valueGroup">
                                    <img src="/image/minusBtn.png" alt="" />
                                    <div className="value">1</div>
                                    <img src="/image/plusBtn.png" alt="" />
                                </div>
                                <div className="text">Maximum 5 bubbles can be reserved per wallet.</div>
                                <div className="totalValueGroup">
                                    <div className="totalText">Total</div>
                                    <div className="ethValue">0.15ETH</div>
                                </div>
                                <div className="reserveBtn">Reserve a Bubble</div>
                                <div className="bubbleValueGroup">
                                    <div className="bubbleValue">237/1000</div>
                                    <div className="bubbleText">Bubbles</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content7">
                <img src="/image/img11.png" alt="" />
                <div className="content1">
                    <div className="title">Few words about matching</div>
                    <div className="text">Your characters will fall in love. You can mate your characters, but also you can mate it with characters of another people.</div>
                </div>
                <div className="content2">
                    <img src="/image/img12.png" alt="" />
                </div>
            </div>

            <div className="buyWorldComponent">
                <div className="carouselPanel">
                    <Carousel showThumbs={false} showStatus={false}>
                        <div>
                            <img src="/image/carousel.png" alt="" />
                        </div>
                        <div>
                            <img src="/image/carousel.png" alt="" />
                        </div>
                        <div>
                            <img src="/image/carousel.png" alt="" />
                        </div>
                        <div>
                            <img src="/image/carousel.png" alt="" />
                        </div>
                    </Carousel>
                </div>
                <div className="content1">
                    <div className="title">Buy your own world</div>
                    <div className="text">You can purchase bubble landscape or mansion for BubbleX Metaverse. Become one of the most succesfull guy in our universe.</div>
                    <div className="comingsoonBtn">Coming Soon</div>
                </div>
            </div>

            <div className="content9">
                <div className="content1">
                    <div className="subContent">
                        <div className="subContent1">
                            <div className="title">7 smart <br /> contracts</div>
                            <div className="text">CryptoCharacters is governed by 7 smart contracts interconnected with each through the logic of NFT creation.</div>
                        </div>
                        <img src="/image/uchiha.png" alt="" />
                    </div>
                </div>
                <div className="content2">
                    <img src="/image/img13.png" alt="" />
                    <div className="title">Limited <br />collection</div>
                    <div className="text">Become the owner of a limited collection of Bubbles from which Characters hatch.</div>
                </div>
            </div>

            <div className="content10">
                <div className="content1 content">
                    <img src="/image/img14.png" alt="" />
                    <div className="title">Bubble<br /> Language<br /> Kassis</div>
                    <div className="text">Become the owner of a limited collection of Bubbles from which Characters hatch.</div>
                </div>
                <div className="content2 content">
                    <img src="/image/img15.png" alt="" />
                    <div className="title">Battle on <br />blockchain</div>
                    <div className="text">Become the owner of a limited collection of Bubbles from which Characters hatch.</div>
                </div>
                <div className="content3 content">
                    <div className="textGroup">
                        <div className="title">Uniqu gene<br /> combinations</div>
                        <div className="text">Become the owner of a limited collection of Bubbles from which Characters hatch.</div>
                    </div>
                    <img src="/image/dogy.png" alt="" />
                </div>
            </div>

            <div className="slamTeam">
                <div className="title">Slam Team</div>
                <div className="description">We are a team of bubble lovers with 75+ members. Together we developed out SlamCharacter Metaverse, where advanced art and high-end technology meet each other.</div>
                <div className="adminGroup">
                    <div className="adminItem">
                        <div className="avatarBG">
                            <img src="/image/milano.png" alt="" />
                        </div>
                        <div className="name">Milano</div>
                        <div className="position">CEO</div>
                        <div className="description">NFT and blockchain enthusiast,
                            <br />experienced in social networking,
                            <br />fintech and investments.</div>
                    </div>
                    <div className="adminItem">
                        <div className="avatarBG">
                            <img src="/image/alex.png" alt="" />
                        </div>
                        <div className="name">Alex</div>
                        <div className="position">Co-founder</div>
                        <div className="description">Collector and investor. Negotiating
                            <br />and implementing partnerships,
                            <br />leading NFT ventures partners
                            <br />pipeline and management.</div>
                    </div>
                    <div className="adminItem">
                        <div className="avatarBG">
                            <img src="/image/dmitri.png" alt="" />
                        </div>
                        <div className="name">Dmitri</div>
                        <div className="position">Head of Development</div>
                        <div className="description">Experienced tech geek specializing
                            <br />in smart contracts, web and mobile
                            <br />apps development, AI and even
                            <br />more.</div>
                    </div>
                    <div className="adminItem">
                        <div className="avatarBG">
                            <img src="/image/sonya.png" alt="" />
                        </div>
                        <div className="name">Sonya</div>
                        <div className="position">Art Designer</div>
                        <div className="description">Digital art enthusiast, master of
                            <br />vector graphics with mind-blowing
                            <br />ideas and design solutions.</div>
                    </div>
                </div>
            </div>

            <div className="faqPanel">
                <div className="title">FAQ</div>
                <div className="faqItem">
                    <div className="content">
                        <div className="title">What is SlamBubbles?</div>
                        <div className="text">Become the owner of a limited collection of Bubbles from which Characters hatch.Become the owner of a limited collection of Bubbles from which Characters hatch.Become the owner of a limited collection of Bubbles from which Characters hatch.Become the owner of a limited collection of Bubbles from which Characters hatch.Become the owner of a limited collection of Bubbles from which Characters hatch.Become the owner of a limited collection of Bubbles from which Characters hatch.Become the owner of a limited collection of Bubbles from which Characters hatch.</div>
                    </div>
                    <img src="/image/dropdown.png" alt="" />
                </div>

                <div className="faqItem">
                    <div className="content">
                        <div className="title">What is SlamBubbles?</div>
                        {/* <div className="text"></div> */}
                    </div>
                    <img src="/image/dropdown.png" alt="" />
                </div>

                <div className="faqItem">
                    <div className="content">
                        <div className="title">What is SlamBubbles?</div>
                        {/* <div className="text"></div> */}
                    </div>
                    <img src="/image/dropdown.png" alt="" />
                </div>

                <div className="faqItem">
                    <div className="content">
                        <div className="title">What is SlamBubbles?</div>
                        {/* <div className="text"></div> */}
                    </div>
                    <img src="/image/dropdown.png" alt="" />
                </div>

                <div className="faqItem">
                    <div className="content">
                        <div className="title">What is SlamBubbles?</div>
                        {/* <div className="text"></div> */}
                    </div>
                    <img src="/image/dropdown.png" alt="" />
                </div>

            </div>
            <Footer />
        </div>
    );
}