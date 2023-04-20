/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './assets/Header.js';
import EkakrsPohja from './assets/EkakrsPohja.js'
import TokakrsPohja from './assets/TokakrsPohja.js';
import Modaali from './assets/Modaali.js';
import Nappi from "react-bootstrap/button";
import InfoIcon from "./assets/images/infoIcon.png";
import DigiIcon from "./assets/images/DigiKlinikka.png";
import ImageWithLines from './assets/ImageWithLines.js';

function App() {

    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");

    function handleButtonClick(content) {
        setModalContent(content);
        setIsOpen(true);
    }

    function handleClose() {
        setIsOpen(false);
    }

    const lineArray = [
        [
            // 0. Viivat etelä-karjalan hyvinvointialueelle, 1krs pohjapiirrustukseen.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { left: "72.4%", top: "39.3%", width: "4px", height: "2.4%", backgroundColor: "red" },
            { left: "72.4%", top: "39%", width: "5%", height: "4px", backgroundColor: "red" },
            { left: "72.4%", top: "47.7%", width: "4px", height: "8%", backgroundColor: "red" },
            { left: "72.4%", top: "55.4%", width: "7.4%", height: "4px", backgroundColor: "red" },
            { left: "79.3%", top: "51.4%", width: "4px", height: "4.3%", backgroundColor: "red" }

        ],
        [
            // 1. Viivat etelä-karjalan hyvinvointialueelle.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { left: "23.8%", top: "22%", width: "10px", height: "9%", backgroundColor: "red" },
            { left: "23.8%", top: "21.5%", width: "20%", height: "10px", backgroundColor: "red" },
            { left: "23.8%", top: "53%", width: "10px", height: "30%", backgroundColor: "red" },
            { left: "23.8%", top: "83%", width: "28.1%", height: "10px", backgroundColor: "red" },
            { left: "50.7%", top: "66%", width: "10px", height: "18%", backgroundColor: "red" }
        ],
        [
            // 2. Viivat yläkoulun alueelle, 1krs pohjapiirrustukseen.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { left: "72%", top: "47.5%", width: "4px", height: "9%", backgroundColor: "red" },
            { left: "72%", top: "56%", width: "6.8%", height: "4px", backgroundColor: "red" },
            { left: "78.5%", top: "56%", width: "4px", height: "16.5%", backgroundColor: "red" },
            { left: "78.5%", top: "72.2%", width: "6%", height: "4px", backgroundColor: "red" },
            { left: "78.5%", top: "67%", width: "6%", height: "4px", backgroundColor: "red" }

        ],
        [
            // 3. Viivat yläkoulun kuvalle.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { left: "28.4%", top: "0%", width: "10px", height: "61%", backgroundColor: "red" },
            { left: "28.4%", top: "59.5%", width: "20%", height: "10px", backgroundColor: "red" },
            { left: "28.4%", top: "35.5%", width: "20%", height: "10px", backgroundColor: "red" }
        ],
        [
            // 4. Viivat vuoropäiväkodin alueelle, 1krs pohjapiirrustukseen.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { left: "72%", top: "47.5%", width: "4px", height: "9%", backgroundColor: "red" },
            { left: "42%", top: "56.5%", width: "30.5%", height: "4px", backgroundColor: "red" },
            { left: "42%", top: "45.5%", width: "28%", height: "4px", backgroundColor: "red" },
            { left: "41.7%", top: "45.5%", width: "4px", height: "17%", backgroundColor: "red" },
            { left: "39.35%", top: "62%", width: "2.8%", height: "4px", backgroundColor: "red" },
            { left: "39.35%", top: "62%", width: "4px", height: "12%", backgroundColor: "red" },
            { left: "36.4%", top: "73.9%", width: "3.4%", height: "4px", backgroundColor: "red" },
            { left: "36.4%", top: "71.5%", width: "4px", height: "10%", backgroundColor: "red" },
            { left: "20%", top: "71.5%", width: "16.5%", height: "4px", backgroundColor: "red" }
        ],
        [
            // 5. Viivat vuoropäiväkodin alueelle.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { left: "89.6%", top: "0%", width: "10px", height: "30%", backgroundColor: "red" },
            { left: "82.5%", top: "29%", width: "8%", height: "10px", backgroundColor: "red" },
            { left: "82.5%", top: "21%", width: "10px", height: "30%", backgroundColor: "red" },
            { left: "42.5%", top: "21%", width: "40%", height: "10px", backgroundColor: "red" }
        ],
        [
            // 6. Viivat keittiön alueelle, 1krs pohjapiirrustukseen.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { left: "72%", top: "47.5%", width: "4px", height: "9%", backgroundColor: "red" },
            { left: "42%", top: "56.5%", width: "30.5%", height: "4px", backgroundColor: "red" },
            { left: "42%", top: "45.5%", width: "28%", height: "4px", backgroundColor: "red" },
            { left: "41.7%", top: "45.5%", width: "4px", height: "18%", backgroundColor: "red" },
            { left: "28%", top: "63.2%", width: "14.2%", height: "4px", backgroundColor: "red" }
        ],
        [
            // 7. Viivat keittiön alueelle.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { right: "0%", top: "57.5%", width: "50%", height: "10px", backgroundColor: "red" },
            { left: "70%", top: "25%", width: "10px", height: "51.4%", backgroundColor: "red" },
            { left: "50%", top: "25%", width: "20%", height: "10px", backgroundColor: "red" },
            { left: "50%", top: "74.5%", width: "20%", height: "10px", backgroundColor: "red" }
        ],
        [
            // 8. Viivat kotitalouden alueelle, 1krs pohjapiirrustukseen.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { left: "72%", top: "47.5%", width: "4px", height: "9%", backgroundColor: "red" },
            { left: "42%", top: "56.5%", width: "30.5%", height: "4px", backgroundColor: "red" },
            { left: "42%", top: "45.5%", width: "28%", height: "4px", backgroundColor: "red" },
            { left: "41.7%", top: "45.5%", width: "4px", height: "11.5%", backgroundColor: "red" },
            { left: "26.8%", top: "53.6%", width: "15%", height: "4px", backgroundColor: "red" }
        ],
        [
            // 9. Viivat kotitalouden aluelle.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { right: "0%", top: "39.5%", width: "30%", height: "10px", backgroundColor: "red" },
            { left: "82.2%", top: "39.5%", width: "10px", height: "30%", backgroundColor: "red" },
            { left: "70%", top: "55%", width: "13%", height: "10px", backgroundColor: "red" }
        ],
        [
            // 10. Viivat käsitöiden ja kuvataiteen alueelle, 1krs pohjapiirrustukseen.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { left: "72%", top: "47.5%", width: "4px", height: "9%", backgroundColor: "red" },
            { left: "42%", top: "56.5%", width: "30.5%", height: "4px", backgroundColor: "red" },
            { left: "42%", top: "45.5%", width: "28%", height: "4px", backgroundColor: "red" },
            { left: "41.7%", top: "45.5%", width: "4px", height: "11.5%", backgroundColor: "red" },
            { left: "40%", top: "47.3%", width: "2%", height: "4px", backgroundColor: "red" },
            { left: "40%", top: "49.37%", width: "2%", height: "4px", backgroundColor: "red" }
        ],
        [
            // 11. Viivat Käsitöiden ja kuvataiteen alueelle.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { right: "0%", top: "69%", width: "38%", height: "10px", backgroundColor: "red" },
            { right: "0%", top: "79%", width: "7%", height: "10px", backgroundColor: "red" },
            { left: "61.5%", top: "67%", width: "10px", height: "13%", backgroundColor: "red" },
            { left: "30%", top: "66.5%", width: "32.7%", height: "10px", backgroundColor: "red" },
            { left: "68%", top: "46%", width: "10px", height: "24.5%", backgroundColor: "red" }
        ],
        [
            // 12. Viivat musiikkiluokkien ja näyttämön alueelle, 1krs pohjapiirrustukseen.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { left: "68.5%", top: "43.2%", width: "1.5%", height: "3px", backgroundColor: "red" },
            { left: "41.7%", top: "45.5%", width: "28.3%", height: "4px", backgroundColor: "red" },
            { left: "41.7%", top: "38.5%", width: "4px", height: "7%", backgroundColor: "red" },
            { left: "41.7%", top: "38%", width: "16%", height: "4px", backgroundColor: "red" },
            { left: "42%", top: "41.4%", width: "2%", height: "3px", backgroundColor: "red" },
            { left: "43.6%", top: "41.1%", width: "2.1%", height: "3px", backgroundColor: "red" },
        ],
        [
            // 13. Viivat musiikkiluokkien ja näyttämön alueelle.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { right: "13.5%", top: "67.5%", width: "5%", height: "10px", backgroundColor: "red" },
            { right: "15%", top: "90%", width: "82%", height: "10px", backgroundColor: "red" },
            { left: "2.9%", top: "34%", width: "10px", height: "58.2%", backgroundColor: "red" },
            { left: "2.9%", top: "32%", width: "47%", height: "10px", backgroundColor: "red" },
            { left: "2.9%", top: "54.5%", width: "6.5%", height: "10px", backgroundColor: "red" },
            { left: "8.4%", top: "52.5%", width: "6.5%", height: "10px", backgroundColor: "red" }
        ],
        [
            // 14. Viivat liikuntasalien alueelle, 1krs pohjapiirrustukseen.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { left: "41.7%", top: "45.5%", width: "28.3%", height: "4px", backgroundColor: "red" },
            { left: "41.7%", top: "40%", width: "0.4%", height: "6%", backgroundColor: "red" },
            { left: "42%", top: "20.5%", width: "0.4%", height: "20%", backgroundColor: "red" },
            { left: "42%", top: "20.4%", width: "2%", height: "0.4%", backgroundColor: "red" },
            { left: "42%", top: "30.9%", width: "2%", height: "0.45%", backgroundColor: "red" },
        ],
        [
            // 15. Viivat liikuntasalien alueelle.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { right: "18.2%", bottom: "1%", width: "10px", height: "5%", backgroundColor: "red" },
            { left: "11%", bottom: "1%", width: "10px", height: "45.5%", backgroundColor: "red" },
            { left: "11%", top: "87.5%", width: "5%", height: "10px", backgroundColor: "red" },
            { left: "11%", top: "53%", width: "5%", height: "10px", backgroundColor: "red" }
        ],
        [
            // 16. Viivat pukuhuoneiden alueelle, 1krs pohjapiirrustukseen.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { left: "42%", top: "45.5%", width: "28%", height: "4px", backgroundColor: "red" },
            { left: "41.6%", top: "40%", width: "4px", height: "5.9%", backgroundColor: "red" },
            { left: "42%", top: "26.5%", width: "4px", height: "14%", backgroundColor: "red" },
            { left: "32.5%", top: "26.1%", width: "10%", height: "4px", backgroundColor: "red" },
            { left: "42%", top: "38.1%", width: "12%", height: "4px", backgroundColor: "red" },
            { left: "42%", top: "35.5%", width: "2%", height: "4px", backgroundColor: "red" },
            { left: "50%", top: "36.5%", width: "4px", height: "2%", backgroundColor: "red" },
            { left: "53.5%", top: "36.5%", width: "4px", height: "2%", backgroundColor: "red" }
        ],
        [
            // 17. Viivat pukuhuoneiden alueelle.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { right: "53.8%", top: "35%", width: "10px", height: "64%", backgroundColor: "red" },
            { right: "53.8%", top: "34.5%", width: "22%", height: "10px", backgroundColor: "red" },
            { right: "12%", top: "94.5%", width: "42%", height: "10px", backgroundColor: "red" },
            { right: "48%", top: "81.5%", width: "6%", height: "10px", backgroundColor: "red" },
            { right: "12%", top: "89%", width: "10px", height: "6%", backgroundColor: "red" },
            { right: "24.7%", top: "89%", width: "10px", height: "6%", backgroundColor: "red" }
        ],
        [
            // 18. Viivat nuortenpalveluiden alueelle, 1krs pohjapiirrustukseen.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { left: "72%", top: "47.5%", width: "4px", height: "9%", backgroundColor: "red" },
            { left: "54.5%", top: "56.5%", width: "18%", height: "4px", backgroundColor: "red" },
            { left: "54.5%", top: "53.5%", width: "4px", height: "3.5%", backgroundColor: "red" },
            { left: "59.1%", top: "53.5%", width: "4px", height: "3.5%", backgroundColor: "red" },
        ],
        [
            // 19. Viivat nuortenpalveluiden alueelle.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { right: "90.9%", top: "85%", width: "10px", height: "8%", backgroundColor: "red" },
            { right: "70%", top: "85%", width: "10px", height: "8%", backgroundColor: "red" },
            { right: "12%", top: "91.8%", width: "79.6%", height: "10px", backgroundColor: "red" },
            { right: "12%", top: "45%", width: "10px", height: "48%", backgroundColor: "red" }
        ],
        [
            // 20. Viivat joustavan perusopetuksen 1krs tiloihin.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { right: "70%", top: "32%", width: "10px", height: "43%", backgroundColor: "red" },
            { right: "25%", top: "74.5%", width: "46.4%", height: "10px", backgroundColor: "red" },
            { left: "9%", top: "20%", width: "9%", height: "10px", backgroundColor: "red" },
            { left: "9%", top: "20%", width: "10px", height: "8.5%", backgroundColor: "red" },
            { left: "9%", top: "39.5%", width: "10px", height: "8.5%", backgroundColor: "red" }
        ],
        [
            // 21. Viivat Joustavan perusopetuksen 2krs tiloihin.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { right: "54.5%", top: "69%", width: "10px", height: "26%", backgroundColor: "red" },
            { right: "18%", top: "95%", width: "38.3%", height: "10px", backgroundColor: "red" },
            { right: "18%", top: "82%", width: "10px", height: "14%", backgroundColor: "red" },
            { right: "18%", top: "82%", width: "5.7%", height: "10px", backgroundColor: "red" },
            { right: "23.6%", top: "35%", width: "10px", height: "48.3%", backgroundColor: "red" },
            { right: "22%", top: "35%", width: "2%", height: "10px", backgroundColor: "red" },
            { right: "22%", top: "17%", width: "10px", height: "18%", backgroundColor: "red" },
        ],
        [
            // 22. Viivat lukion alueelle, 2krs pohjapiirrustukseen.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { left: "69.2%", top: "49%", width: "4px", height: "8%", backgroundColor: "red" },
            { left: "55%", top: "49%", width: "4px", height: "8%", backgroundColor: "red" },
            { left: "55%", top: "57%", width: "26%", height: "4px", backgroundColor: "red" },
            { left: "76%", top: "52%", width: "4px", height: "5%", backgroundColor: "red" },
            { left: "74%", top: "52%", width: "2%", height: "4px", backgroundColor: "red" },
            { left: "74%", top: "47%", width: "4px", height: "5%", backgroundColor: "red" },
            { left: "80.7%", top: "57%", width: "4px", height: "16.5%", backgroundColor: "red" },
            { left: "80.7%", top: "67.5%", width: "5%", height: "4px", backgroundColor: "red" },
            { left: "80.7%", top: "73.2%", width: "5%", height: "4px", backgroundColor: "red" }
        ],
        [
            // 23. Viivat lukion alueelle.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { left: "18.5%", top: "33%", width: "8px", height: "15%", backgroundColor: "red" },
            { left: "14%", top: "48%", width: "34%", height: "8px", backgroundColor: "red" },
            { left: "35.3%", top: "38%", width: "8px", height: "10%", backgroundColor: "red" },
            { left: "30%", top: "38%", width: "6%", height: "8px", backgroundColor: "red" },
            { left: "30%", top: "30%", width: "8px", height: "8%", backgroundColor: "red" },
            { left: "47.5%", top: "48%", width: "8px", height: "31.5%", backgroundColor: "red" },
            { left: "47.5%", top: "79%", width: "10%", height: "8px", backgroundColor: "red" },
            { left: "47.5%", top: "68.5%", width: "10%", height: "8px", backgroundColor: "red" }
        ],
        [
            // 24. Viivat hallinnon alueelle, 2krs pohjapiirrustukseen.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { left: "69.2%", top: "49%", width: "4px", height: "8%", backgroundColor: "red" },
            { left: "54.8%", top: "49%", width: "4px", height: "11%", backgroundColor: "red" },
            { left: "55%", top: "57%", width: "14.9%", height: "4px", backgroundColor: "red" },
            { left: "56.4%", top: "57%", width: "4px", height: "4%", backgroundColor: "red" },
            { left: "44%", top: "59.5%", width: "11.4%", height: "4px", backgroundColor: "red" },
            { left: "43.8%", top: "59.5%", width: "4px", height: "2%", backgroundColor: "red" },
            { left: "45.5%", top: "59.5%", width: "4px", height: "2%", backgroundColor: "red" },
            { left: "49.7%", top: "59.5%", width: "4px", height: "2%", backgroundColor: "red" },
            { left: "51.3%", top: "59.5%", width: "4px", height: "2%", backgroundColor: "red" },
            { left: "75.8%", top: "61%", width: "2%", height: "4px", backgroundColor: "transparent" }
        ],
        [
            // 25. Viivat hallinnon alueelle.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { left: "35%", top: "12%", width: "8px", height: "54%", backgroundColor: "red" },
            { left: "72.5%", top: "12%", width: "8px", height: "40%", backgroundColor: "red" },
            { right: "26.7%", top: "51%", width: "38%", height: "8px", backgroundColor: "red" },
            { right: "60%", top: "51%", width: "8px", height: "20%", backgroundColor: "red" },
            { right: "64.2%", top: "65%", width: "29.8%", height: "8px", backgroundColor: "red" },
            { left: "6%", top: "65%", width: "8px", height: "10%", backgroundColor: "red" },
            { left: "10.5%", top: "65%", width: "8px", height: "10%", backgroundColor: "red" },
            { left: "21.5%", top: "65%", width: "8px", height: "10%", backgroundColor: "red" },
            { left: "25.5%", top: "65%", width: "8px", height: "10%", backgroundColor: "red" },
            { right: "6%", top: "72%", width: "4%", height: "8px", backgroundColor: "transparent" }
        ],
        [
            // 26. Viivat päiväkodin alueelle, 2krs pohjapiirrustukseen.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { left: "54.8%", top: "49.5%", width: "4px", height: "9%", backgroundColor: "red" },
            { left: "69.3%", top: "49.5%", width: "4px", height: "9%", backgroundColor: "red" },
            { left: "38%", top: "58%", width: "32%", height: "4px", backgroundColor: "red" },
            { left: "37.8%", top: "58%", width: "4px", height: "16%", backgroundColor: "red" },
            { left: "37.1%", top: "74%", width: "4px", height: "17.7%", backgroundColor: "red" },
            { left: "37.1%", top: "74%", width: "1.3%", height: "4px", backgroundColor: "red" },
            { left: "28%", top: "91%", width: "9.2%", height: "4px", backgroundColor: "red" },
            { left: "39.9%", top: "82%", width: "4px", height: "2%", backgroundColor: "red" },
            { left: "37.1%", top: "82%", width: "3%", height: "4px", backgroundColor: "red" },
        ],
        [
            // 27. Viivat päiväkodin alueelle.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { right: "1%", top: "48%", width: "25%", height: "10px", backgroundColor: "red" },
            { right: "25%", top: "45.6%", width: "10px", height: "5%", backgroundColor: "red" },
            { right: "25%", top: "45.6%", width: "20%", height: "10px", backgroundColor: "red" },
            { right: "25%", top: "50.1%", width: "20%", height: "10px", backgroundColor: "red" },
            { right: "5.5%", top: "48%", width: "10px", height: "20%", backgroundColor: "red" },
            { right: "12.2%", top: "30%", width: "10px", height: "18%", backgroundColor: "red" },
        ],
        [
            // 28. Viivat alakoulun, esi- ja alkuopetuksen alueelle, 2krs pohjapiirrustukseen.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { left: "54.8%", top: "49.5%", width: "4px", height: "9%", backgroundColor: "red" },
            { left: "69.3%", top: "49.5%", width: "4px", height: "9%", backgroundColor: "red" },
            { left: "36.7%", top: "58%", width: "33.3%", height: "4px", backgroundColor: "red" },
            { left: "37.7%", top: "58%", width: "4px", height: "16%", backgroundColor: "red" },
            { left: "37.1%", top: "74%", width: "4px", height: "17.7%", backgroundColor: "red" },
            { left: "37.1%", top: "74%", width: "1.3%", height: "4px", backgroundColor: "red" },
            { left: "39.9%", top: "82%", width: "4px", height: "2%", backgroundColor: "red" },
            { left: "37.1%", top: "82%", width: "3%", height: "4px", backgroundColor: "red" },
            { left: "32.5%", top: "70.5%", width: "8.2%", height: "4px", backgroundColor: "red" },
            { left: "36.7%", top: "49.5%", width: "4px", height: "9%", backgroundColor: "red" },
            { left: "35%", top: "49.4%", width: "2.4%", height: "4px", backgroundColor: "red" },
        ],
        [
            // 29. Viivat alakoulun, esi- ja alkuopetuksen alueelle.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { right: "1%", top: "16%", width: "13%", height: "10px", backgroundColor: "red" },
            { right: "11%", top: "16%", width: "10px", height: "32%", backgroundColor: "red" },
            { right: "12.5%", top: "48.1%", width: "10px", height: "34%", backgroundColor: "red" },
            { right: "11%", top: "48%", width: "2.6%", height: "10px", backgroundColor: "red" },
            { right: "6.5%", top: "64%", width: "10px", height: "3%", backgroundColor: "red" },
            { right: "6.5%", top: "63%", width: "7%", height: "10px", backgroundColor: "red" },
            { right: "6.5%", top: "41.4%", width: "17%", height: "10px", backgroundColor: "red" },
            { right: "13%", top: "1%", width: "10px", height: "16.1%", backgroundColor: "red" },
            { right: "13%", top: "0.7%", width: "5%", height: "10px", backgroundColor: "red" },
        ],
        [
            // 30. Viivat luonnontieteiden alueelle, 2krs pohjapiirrustukseen.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { left: "54.8%", top: "49.5%", width: "4px", height: "9%", backgroundColor: "red" },
            { left: "69.3%", top: "49.5%", width: "4px", height: "9%", backgroundColor: "red" },
            { left: "36.7%", top: "58%", width: "33.3%", height: "4px", backgroundColor: "red" },
            { left: "36.7%", top: "32.6%", width: "4px", height: "26%", backgroundColor: "red" },
            { left: "35%", top: "32.6%", width: "2.4%", height: "4px", backgroundColor: "red" },
            { left: "35%", top: "42.8%", width: "2.4%", height: "4px", backgroundColor: "red" },
        ],
        [
            // 31. Viivat luonnontieteiden alueelle.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { right: "1%", top: "90%", width: "4.4%", height: "10px", backgroundColor: "red" },
            { right: "4.3%", top: "3%", width: "10px", height: "87.5%", backgroundColor: "red" },
            { right: "4.3%", top: "3%", width: "22%", height: "10px", backgroundColor: "red" },
            { right: "4.3%", top: "37.5%", width: "8%", height: "10px", backgroundColor: "red" },
            { right: "26%", top: "3%", width: "10px", height: "8%", backgroundColor: "red" },
            { right: "26%", top: "10%", width: "8%", height: "10px", backgroundColor: "red" },
        ],
        [
            // 32. Viivat vahtimestarin alueelle, 2krs pohjapiirrustukseen.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { left: "72.4%", top: "47.7%", width: "4px", height: "8%", backgroundColor: "red" },
            { left: "67.8%", top: "55.4%", width: "5.1%", height: "4px", backgroundColor: "red" },
            { left: "67.8%", top: "53.5%", width: "4px", height: "2%", backgroundColor: "red" },
        ],
        [
            // 33. Viivat vahtimestarin alueelle.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { right: "25%", top: "45%", width: "10px", height: "50%", backgroundColor: "red" },
            { right: "25%", top: "94%", width: "45%", height: "10px", backgroundColor: "red" },
            { right: "68.3%", top: "86%", width: "10px", height: "9%", backgroundColor: "red" },
        ],
        [
            // 34. Viivat digiklinikan alueelle, 2krs pohjapiirrustukseen.
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { left: "72.4%", top: "47.7%", width: "4px", height: "4%", backgroundColor: "red" },
            { left: "72.4%", top: "51.3%", width: "3.5%", height: "4px", backgroundColor: "red" },
        ],
        [
            // 35. Viivat digiklinikan
            // Vaihtamalla backgroundColorin arvoa voit nähdä mikä viiva on missä.
            { right: "52%", top: "47%", width: "10px", height: "30%", backgroundColor: "red" },
            { right: "26%", top: "77%", width: "27.4%", height: "10px", backgroundColor: "red" },

        ]
    ];

    // Imatran kaupungin oranssi väri: rgb(237, 108, 65)
    // Imatran kaupungin ruskea väri: rgb(91, 44, 63)

    return (
        <div className="App">
            <Header className="Header"></Header>

            <div className="Napit">
                <Nappi style={{ margin: "2px", backgroundColor: "rgb(91, 44, 63)", borderColor: "transparent" }} variant="primary"
                    onClick={() => handleButtonClick(
                        <div>
                            <h1 className="modalHeader">Etelä-Karjalan Hyvinvointialue</h1>
                            <ImageWithLines
                                imageSrc="./images/Pohja1Krs_väri.png"
                                lines={lineArray[0]}
                                className="ekaKrsModal"
                            />
                            <ImageWithLines
                                imageSrc="./images/EksotenAlue.png"
                                lines={lineArray[1]}
                                className="eksote"
                            />
                        </div>
                    )}>
                    1. Etelä-Karjalan Hyvinvointialue
                </Nappi>
                <Nappi style={{ margin: "2px", backgroundColor: "rgb(91, 44, 63)", borderColor: "transparent" }} variant="primary"
                    onClick={() => handleButtonClick(
                        <div>
                            <h1 className="modalHeader">Yläkoulu</h1>
                            <ImageWithLines
                                imageSrc="./images/Pohja1Krs_väri.png"
                                lines={lineArray[2]}
                                className="ekaKrsModal"
                            />
                            <ImageWithLines
                                imageSrc="./images/YläkoulunAlue.png"
                                lines={lineArray[3]}
                                className="ylakoulu"
                            />
                        </div>
                    )}>
                    2. Yläkoulu
                </Nappi>
                <Nappi style={{ margin: "2px", backgroundColor: "rgb(91, 44, 63)", borderColor: "transparent" }} variant="primary"
                    onClick={() => handleButtonClick(
                        <div>
                            <h1 className="modalHeader">Vuoropäiväkoti</h1>
                            <ImageWithLines
                                imageSrc="./images/Pohja1Krs_väri.png"
                                lines={lineArray[4]}
                                className="ekaKrsModal"
                            />
                            <ImageWithLines
                                imageSrc="./images/VuoropäiväkodinAlue.png"
                                lines={lineArray[5]}
                                className="vuoropaivakoti"
                            />
                        </div>
                    )}>
                    3. Vuoropäiväkoti
                </Nappi>
                <Nappi style={{ margin: "2px", backgroundColor: "rgb(91, 44, 63)", borderColor: "transparent" }} variant="primary"
                    onClick={() => handleButtonClick(
                        <div>
                            <h1 className="modalHeader">Keittiö</h1>
                            <ImageWithLines
                                imageSrc="./images/Pohja1Krs_väri.png"
                                lines={lineArray[6]}
                                className="ekaKrsModal"
                            />
                            <ImageWithLines
                                imageSrc="./images/KeittiönAlue.png"
                                lines={lineArray[7]}
                                className="keittio"
                            />
                        </div>
                    )}>
                    4. Keittiö
                </Nappi>
                <Nappi style={{ margin: "2px", backgroundColor: "rgb(91, 44, 63)", borderColor: "transparent" }} variant="primary"
                    onClick={() => handleButtonClick(
                        <div>
                            <h1 className="modalHeader">Kotitalous</h1>
                            <ImageWithLines
                                imageSrc="./images/Pohja1Krs_väri.png"
                                lines={lineArray[8]}
                                className="ekaKrsModal"
                            />
                            <ImageWithLines
                                imageSrc="./images/KotitaloudenAlue.png"
                                lines={lineArray[9]}
                                className="kotitalous"
                            />
                        </div>
                    )}>
                    5. Kotitalous
                </Nappi>
                <Nappi style={{ margin: "2px", backgroundColor: "rgb(237, 108, 65)", borderColor: "transparent" }} variant="primary"
                    onClick={() => handleButtonClick(
                        <div>
                            <h1 className="modalHeader">Käsityöt ja kuvataide</h1>
                            <ImageWithLines
                                imageSrc="./images/Pohja1Krs_väri.png"
                                lines={lineArray[10]}
                                className="ekaKrsModal"
                            />
                            <ImageWithLines
                                imageSrc="./images/KäsitöidenjakuvataiteenAlue.png"
                                lines={lineArray[11]}
                                className="kasityotjakuvataide"
                            />
                        </div>
                    )}>
                    6. Käsityöt ja kuvataide
                </Nappi>
                <Nappi style={{ margin: "2px", backgroundColor: "rgb(237, 108, 65)", borderColor: "transparent" }} variant="primary"
                    onClick={() => handleButtonClick(
                        <div>
                            <h1 className="modalHeader">Musiikki luokat ja näyttämö</h1>
                            <ImageWithLines
                                imageSrc="./images/Pohja1Krs_väri.png"
                                lines={lineArray[12]}
                                className="ekaKrsModal"
                            />
                            <ImageWithLines
                                imageSrc="./images/MusiikkijaNäyttämöAlue.png"
                                lines={lineArray[13]}
                                className="musiikkinayttamo"
                            />
                        </div>
                    )}>
                    7. Musiikki luokat ja näyttämö
                </Nappi>
                <Nappi style={{ margin: "2px", backgroundColor: "rgb(237, 108, 65)", borderColor: "transparent" }} variant="primary"
                    onClick={() => handleButtonClick(
                        <div>
                            <h1 className="modalHeader">Liikuntasalit</h1>
                            <ImageWithLines
                                imageSrc="./images/Pohja1Krs_väri.png"
                                lines={lineArray[14]}
                                className="ekaKrsModal"
                            />
                            <ImageWithLines
                                imageSrc="./images/LiikuntasalienAlue.png"
                                lines={lineArray[15]}
                                className="liikuntasalit"
                            />
                        </div>
                    )}>
                    8. Liikuntasalit
                </Nappi>
                <Nappi style={{ margin: "2px", backgroundColor: "rgb(237, 108, 65)", borderColor: "transparent" }} variant="primary"
                    onClick={() => handleButtonClick(
                        <div>
                            <h1 className="modalHeader">Pukuhuoneet</h1>
                            <ImageWithLines
                                imageSrc="./images/Pohja1Krs_väri.png"
                                lines={lineArray[16]}
                                className="ekaKrsModal"
                            />
                            <ImageWithLines
                                imageSrc="./images/PukuhuoneidenAlue.png"
                                lines={lineArray[17]}
                                className="pukuhuoneet"
                            />
                        </div>
                    )}>
                    9. Pukuhuoneet
                </Nappi>
                <Nappi style={{ margin: "2px", backgroundColor: "rgb(237, 108, 65)", borderColor: "transparent" }} variant="primary"
                    onClick={() => handleButtonClick(
                        <div>
                            <h1 className="modalHeader">Nuortenpalvelut</h1>
                            <ImageWithLines
                                imageSrc="./images/Pohja1Krs_väri.png"
                                lines={lineArray[18]}
                                className="ekaKrsModal"
                            />
                            <ImageWithLines
                                imageSrc="./images/NuortenAlue.png"
                                lines={lineArray[19]}
                                className="nuortenpalvelut"
                            />
                        </div>
                    )}>
                    10. Nuortenpalvelut
                </Nappi>
                <br></br>
                <Nappi style={{ margin: "2px", backgroundColor: "rgb(237, 108, 65)", borderColor: "transparent" }} variant="primary"
                    onClick={() => handleButtonClick(
                        <div>
                            <h1 className="modalHeader">Joustava Perusopetus</h1>
                            <ImageWithLines
                                imageSrc="./images/Jopo1krsAlue.png"
                                lines={lineArray[20]}
                                className="jopo1krs"
                            />
                            <ImageWithLines
                                imageSrc="./images/Jopo2krsAlue.png"
                                lines={lineArray[21]}
                                className="jopo2krs"
                            />
                        </div>
                    )}>
                    11. Joustava Perusopetus
                </Nappi>
                <Nappi style={{ margin: "2px", backgroundColor: "rgb(237, 108, 65)", borderColor: "transparent" }} variant="primary"
                    onClick={() => handleButtonClick(
                        <div>
                            <h1 className="modalHeader">Lukio</h1>
                            <ImageWithLines
                                imageSrc="./images/Pohja2Krs_väri.png"
                                lines={lineArray[22]}
                                className="tokaKrsModal"
                            />
                            <ImageWithLines
                                imageSrc="./images/LukionAlue.png"
                                lines={lineArray[23]}
                                className="lukio"
                            />
                        </div>
                    )}>
                    12. Lukio
                </Nappi>
                <Nappi style={{ margin: "2px", backgroundColor: "rgb(237, 108, 65)", borderColor: "transparent" }} variant="primary"
                    onClick={() => handleButtonClick(
                        <div style={{ textAlign: "center" }}>
                            <h1 className="modalHeader">Hallinto ja opettajanhuone</h1>
                            <ImageWithLines
                                imageSrc="./images/Pohja2Krs_väri.png"
                                lines={lineArray[24]}
                                className="tokaKrsModal"
                            />
                            <ImageWithLines
                                imageSrc="./images/HallinnonAlue.png"
                                lines={lineArray[25]}
                                className="hallinto"
                            />
                        </div>
                    )}>
                    13. Hallinto ja opettajanhuone
                </Nappi>
                <Nappi style={{ margin: "2px", backgroundColor: "rgb(237, 108, 65)", borderColor: "transparent" }} variant="primary"
                    onClick={() => handleButtonClick(
                        <div>
                            <h1 className="modalHeader">Päiväkoti</h1>
                            <ImageWithLines
                                imageSrc="./images/Pohja2Krs_väri.png"
                                lines={lineArray[26]}
                                className="tokaKrsModal"
                            />
                            <ImageWithLines
                                imageSrc="./images/PäiväkodinAlueZoom.png"
                                lines={lineArray[27]}
                                className="paivakoti"
                            />
                        </div>
                    )}>
                    14. Päiväkoti
                </Nappi>
                <Nappi style={{ margin: "2px", backgroundColor: "rgb(237, 108, 65)", borderColor: "transparent"}}
                    onClick={() => handleButtonClick(
                        <div>
                            <h1 className="modalHeader">Alakoulu, Esi- ja Alkuopetus</h1>
                            <ImageWithLines
                                imageSrc="./images/Pohja2Krs_väri.png"
                                lines={lineArray[28]}
                                className="tokaKrsModal"
                            />
                            <ImageWithLines
                                imageSrc="./images/AlaEsiAlkuAlue.png"
                                lines={lineArray[29]}
                                className="alaesialku"
                            />
                        </div>
                    )}>
                    15. Alakoulu, Esi- ja Alkuopetus
                </Nappi>
                <Nappi style={{ margin: "2px", backgroundColor: "rgb(237, 108, 65)", borderColor: "transparent" }} variant="primary"
                    onClick={() => handleButtonClick(
                        <div>
                            <h1 className="modalHeader">Luonnontieteet</h1>
                            <ImageWithLines
                                imageSrc="./images/Pohja2Krs_väri.png"
                                lines={lineArray[30]}
                                className="tokaKrsModal"
                            />
                            <ImageWithLines
                                imageSrc="./images/LuonnontieteidenAlue.png"
                                lines={lineArray[31]}
                                className="luonnontieteet"
                            />
                        </div>
                    )}>
                    16. Luonnontieteet
                </Nappi>
                <Nappi style={{ margin: "2px", backgroundColor: "rgb(237, 108, 65)", borderColor: "transparent" }} variant="primary"
                    onClick={() => handleButtonClick(
                        <div>
                            <h1 className="modalHeader">Vahtimestari</h1>
                            <ImageWithLines
                                imageSrc="./images/Pohja1Krs_väri.png"
                                lines={lineArray[32]}
                                className="ekaKrsModal"
                            />
                            <ImageWithLines
                                imageSrc="./images/VahtimestarinAlue.png"
                                lines={lineArray[33]}
                                className="vahtimestari"
                            />
                        </div>
                    )}>
                    <img style={{
                        marginBottom: "2px",
                        marginRight: "5px",
                        height: "19px",
                        width: "19px",
                    }}
                        alt="InfoIcon"
                        src={InfoIcon}>
                    </img>
                    Vahtimestari
                </Nappi>
                <Nappi style={{ margin: "2px", backgroundColor: "rgb(237, 108, 65)", borderColor: "transparent" }} variant="primary"
                    onClick={() => handleButtonClick(
                        <div>
                            <h1 className="modalHeader">Digiklinikka</h1>
                            <ImageWithLines
                                imageSrc="./images/Pohja1Krs_väri.png"
                                lines={lineArray[34]}
                                className="ekaKrsModal"
                            />
                            <ImageWithLines
                                imageSrc="./images/DigiKlinikanAlue.png"
                                lines={lineArray[35]}
                                className="digiklinikka"
                            />
                        </div>
                    )}>
                    <img style={{
                        marginBottom: "2px",
                        marginRight: "5px",
                        height: "19px",
                        width: "19px",
                    }}
                        alt="DigiIcon"
                        src={DigiIcon}>
                    </img>
                    Digiklinikka
                </Nappi>
            </div>
            <Modaali isOpen={isOpen} onClose={handleClose}>
                {modalContent}
            </Modaali>
            <div className="Pohjat">
                <EkakrsPohja />
                <TokakrsPohja />
            </div>
        </div>

    );
};

const rootElement = document.getElementById("root");

export default App;