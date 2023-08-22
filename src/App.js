//REACT
import React from 'react';
//FIREBASE
import { db } from './firebase';

export default function App() {
    const [info, setInfo] = React.useState([]);

    React.useEffect(() => {
        const infoRef = db.ref('info');
        infoRef.on('value', (snapshot) => {
            const infos = snapshot.val();
            const infoList = [];
            for (let id in infos) {
                infoList.push({ id, ...infos[id] });
            }
            setInfo(infoList);
        });
    }, []);

    console.log("info", info)

    return <></>
}