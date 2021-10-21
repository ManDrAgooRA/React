import React from 'react'
import './InformationList.scss';
import NextStepPlayer from '../NextStepPlayer/NextStepPlayer';
import Winner from '../Winner/Winner';
import NewGame from '../NewGame/NewGame';
import HistorySteps from '../HistorySteps/HistorySteps';
import GiveUp from '../GiveUp/GiveUp';
import RandomPlayer from '../RandomPlayer/RandomPlayer';
import FirstStepX from '../FirstStepX/FirstStepX';
import FirstStepO from '../FisrtStepO/FirstStepO';

export default function InformationList() {

    return (
        <div className="container">
            <RandomPlayer></RandomPlayer>
            <FirstStepX></FirstStepX>
            <FirstStepO></FirstStepO>
            <NewGame></NewGame>
            <GiveUp></GiveUp>
            <Winner></Winner>
            <NextStepPlayer></NextStepPlayer>
            <HistorySteps></HistorySteps>
        </div>

    )
}
