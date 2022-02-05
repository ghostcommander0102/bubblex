import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import DNAComponent from '../components/Marketplace/DNAComponent';
import HistoryComponent from '../components/Marketplace/HistoryComponent';
import CustomCalendar from "../components/Marketplace/CustomCalendar";
import MakeCharacterModal from '../components/Marketplace/MakeCharacterModal';
import { useState } from 'react';
export default function Marketplace() {
    const [btnIndex, setBtnIndex] = useState(0);
    const [calendarShow, setCalendarShow] = useState(false);
    const [showMakeCharacterModal, setShowMakeCharacterModal] = useState(false);
    const onSetShowMakeCharacterModal = () => {
        setShowMakeCharacterModal(!showMakeCharacterModal);
    }
    const onSetDate = (date) => {
        console.log(date);
        setCalendarShow(false);
    }
    return (
        <div className="MarketplaceScreen">
            <Header selected="Marketplace" />
            {btnIndex == 1 ?
                <div className="mateContent">
                    <div className="content">
                        <div className="title">Mate Characters</div>
                        <div className="text">These two lovely Characters will soon be parents!</div>
                        <div className="heartGroup">
                            <img src="/image/heart_left.png" alt="" />
                            <img src="/image/heart1.png" alt="" />
                            <img src="/image/heart_right.png" alt="" />
                        </div>
                        <div className="charaterGroup">
                            <div className="characterItem">
                                <img src="/image/sai1.png" alt="" />
                                <div className="userId">#421</div>
                                <div className="name">Lenin</div>
                                <div className="commonBtn">Common</div>
                                <img src="/image/male.png" alt="" />
                            </div>
                            <div className="characterItem1">
                                <img src="/image/selectCharacter.png" alt="" />
                                <img src="/image/female.png" alt="" />
                            </div>
                        </div>
                        <div className="tokenContent">
                            <div className="title">Mating fee</div>
                            <div className="value">0.0215 $SLM</div>
                        </div>
                        <div className="tokenContent">
                            <div className="title">Transactiong gas cost</div>
                            <div className="value">0.00543 $SLM</div>
                        </div>
                        <div className="tokenContent tokenContent1">
                            <div className="title">Total</div>
                            <div className="value">0.0215 $SLM</div>
                        </div>
                        <div className="detail">This is our best estimation. By clicking the button below, you will be prompted with the final transaction costs.</div>
                        <div className="confirmBtn" onClick={() => setBtnIndex(0)}>Okay, let them be alone for a while</div>
                    </div>
                </div>
                :
                <div className="content">
                    {btnIndex == 2 ?
                        <div className="sellContent">
                            <div className="title">Sell</div>
                            <div className="content1">
                                <div className="text">Enter Start Price</div>
                                <div className="inputGroup">
                                    <input type="text" />
                                    <div className="inputControl">
                                        <div className="inputUp"></div>
                                        <div className="inputDown"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="content1">
                                <div className="text">Enter End Price</div>
                                <div className="inputGroup">
                                    <input type="text" />
                                    <div className="inputControl">
                                        <div className="inputUp"></div>
                                        <div className="inputDown"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="content1 content2">
                                <div className="text">Duration</div>
                                <div className="inputGroup">
                                    <div className="">
                                        <input type="text" />
                                        <img src="/image/Calendar.png" alt="" onClick={() => setCalendarShow(true)} />
                                    </div>
                                    <div className="inputControl">
                                        <div className="inputUp"></div>
                                        <div className="inputDown"></div>
                                    </div>
                                    {calendarShow ? <CustomCalendar onSetDate={onSetDate} /> : ""}
                                </div>
                            </div>
                            <div className="content1">
                                <div className="cancelBtn" onClick={()=>setBtnIndex(0)}>Cancel</div>
                                <div className="confirmBtn" onClick={()=>setBtnIndex(0)}>Confirm</div>
                            </div>
                        </div>
                        :
                        <div className="content1">
                            <div className="userId">#421</div>
                            <div className="name">Sai</div>
                            <div className="epicBtn">Epic</div>
                            <div className="buttonGroup">
                                <div className="sellBtn" onClick={() => setBtnIndex(2)}>
                                    <div className="group1">
                                        <img src="/image/sell.svg" alt="" />
                                        <div>Sell</div>
                                    </div>
                                </div>
                                <div className="mateBtn" onClick={() => setBtnIndex(1)}>
                                    <div className="group1">
                                        <img src="/image/mate.png" alt="" />
                                        <div>Mate</div>
                                    </div>
                                </div>
                                <div className="makeBtn" onClick={onSetShowMakeCharacterModal}>
                                    <div className="group1">
                                        <img src="/image/make.png" alt="" />
                                        <div>Make 3D</div>
                                    </div>
                                </div>
                            </div>
                            <div className="aboutUser">
                                <img src="/image/avatar.png" alt="" />
                                <div className="userGroup">
                                    <div className="userInfo">Owner</div>
                                    <div className="user">user11(you)</div>
                                    <div className="walletAddress">
                                        <div className="text">Address</div>
                                        <div className="address"> 0xa89932359eef0a325..</div>
                                    </div>
                                </div>
                            </div>

                            <Tabs>
                                <TabList>
                                    <Tab>Attributes</Tab>
                                    <Tab>Family</Tab>
                                    <Tab>History</Tab>
                                    <Tab>DNA</Tab>
                                </TabList>
                                <TabPanel>
                                    <div className="attributeComponent">
                                        <div className="title">Stats</div>
                                        <div className="statGroup">
                                            <div className="statItem">
                                                <div className="text">HP</div>
                                                <div className="item">
                                                    <img src="/image/health.png" alt="" />
                                                    <div>123</div>
                                                </div>
                                            </div>
                                            <div className="statItem">
                                                <div className="text">ATTTACK</div>
                                                <div className="item">
                                                    <img src="/image/attack.png" alt="" />
                                                    <div>123</div>
                                                </div>
                                            </div>
                                            <div className="statItem">
                                                <div className="text">ARMOR</div>
                                                <div className="item">
                                                    <img src="/image/armor.png" alt="" />
                                                    <div>123</div>
                                                </div>
                                            </div>
                                            <div className="statItem">
                                                <div className="text">SPEED</div>
                                                <div className="item">
                                                    <img src="/image/speed.png" alt="" />
                                                    <div>123</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="title">Body Parts</div>
                                        <div className="bodyGroup">
                                            <div className="bodyItemGroup">
                                                <div className="bodyItem">
                                                    <img src="/image/face.png" alt="" />
                                                    <div>Binance</div>
                                                </div>
                                                <div className="bodyItem">
                                                    <img src="/image/mouth.png" alt="" />
                                                    <div>Slamcoin</div>
                                                </div>
                                            </div>
                                            <div className="bodyItemGroup">
                                                <div className="bodyItem">
                                                    <img src="/image/body.png" alt="" />
                                                    <div>Lapidari</div>
                                                </div>
                                                <div className="bodyItem">
                                                    <img src="/image/leg.png" alt="" />
                                                    <div>Crocket</div>
                                                </div>
                                            </div>
                                            <div className="bodyItemGroup">
                                                <div className="bodyItem">
                                                    <img src="/image/stomach.png" alt="" />
                                                    <div>Eva</div>
                                                </div>
                                                <div className="bodyItem">
                                                    <img src="/image/foot.png" alt="" />
                                                    <div>Binance</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="familyComponent">
                                        <div className="text">Parents</div>
                                        <div className="familyGroup">
                                            <div className="familyItem">
                                                <img src="/image/lenin.png" alt="" />
                                                <div className="userId">#421</div>
                                                <div className="name">Lenin</div>
                                                <div className="bottomGroup">
                                                    <div className="commonBtn">Common</div>
                                                    <div className="breedCount">Breed Count: 2</div>
                                                </div>
                                            </div>
                                            <div className="familyItem">
                                                <img src="/image/lenin.png" alt="" />
                                                <div className="userId">#421</div>
                                                <div className="name">Lenin</div>
                                                <div className="bottomGroup">
                                                    <div className="epicBtn">Epic</div>
                                                    <div className="breedCount">Breed Count: 3</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text">Children</div>
                                        <div className="familyGroup">
                                            <div className="familyItem">
                                                <img src="/image/lenin.png" alt="" />
                                                <div className="userId">#421</div>
                                                <div className="name">Lenin</div>
                                                <div className="bottomGroup">
                                                    <div className="commonBtn">Common</div>
                                                    <div className="breedCount">Breed Count: 2</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <HistoryComponent date="01/21/2022" buyerName="GrannyHugs" sellerName="JohnyWalker" tokenCount="4,500 $SLM" buyeraddress="0xa89932359eef..." selleraddress="0xa89932359eef..." tokenMoney="$2,675.32" />
                                    <HistoryComponent date="01/21/2022" buyerName="GrannyHugs" sellerName="JohnyWalker" tokenCount="4,500 $SLM" buyeraddress="0xa89932359eef..." selleraddress="0xa89932359eef..." tokenMoney="$2,675.32" />
                                    <HistoryComponent date="01/21/2022" buyerName="GrannyHugs" sellerName="JohnyWalker" tokenCount="4,500 $SLM" buyeraddress="0xa89932359eef..." selleraddress="0xa89932359eef..." tokenMoney="$2,675.32" />
                                    <HistoryComponent date="01/21/2022" buyerName="GrannyHugs" sellerName="JohnyWalker" tokenCount="4,500 $SLM" buyeraddress="0xa89932359eef..." selleraddress="0xa89932359eef..." tokenMoney="$2,675.32" />
                                    <HistoryComponent date="01/21/2022" buyerName="GrannyHugs" sellerName="JohnyWalker" tokenCount="4,500 $SLM" buyeraddress="0xa89932359eef..." selleraddress="0xa89932359eef..." tokenMoney="$2,675.32" />
                                </TabPanel>
                                <TabPanel>
                                    <DNAComponent icon="face" dnaName="Binance" dnaCardano="Cardano" dnaPlasma="Plasma" />
                                    <DNAComponent icon="body" dnaName="Binance" dnaCardano="Cardano" dnaPlasma="Plasma" />
                                    <DNAComponent icon="stomach" dnaName="Binance" dnaCardano="Cardano" dnaPlasma="Plasma" />
                                    <DNAComponent icon="mouth" dnaName="Binance" dnaCardano="Cardano" dnaPlasma="Plasma" />
                                    <DNAComponent icon="leg" dnaName="Binance" dnaCardano="Cardano" dnaPlasma="Plasma" />
                                    <DNAComponent icon="foot" dnaName="Binance" dnaCardano="Cardano" dnaPlasma="Plasma" />
                                </TabPanel>
                            </Tabs>
                        </div>
                    }
                    <div className="content2">
                        <img src="/image/sai1.png" alt="" />
                        <div className="userId">#421</div>
                        <div className="name">Sai</div>
                        <div className="epicBtn">Epic</div>
                    </div>
                </div>}
            <MakeCharacterModal isShow={showMakeCharacterModal} hideModal={onSetShowMakeCharacterModal} />
            <Footer />
        </div>
    )
}