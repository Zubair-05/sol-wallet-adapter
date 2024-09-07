import {useConnection, useWallet} from "@solana/wallet-adapter-react";

const Airdrop = () => {
    const wallet = useWallet();
    const {connection} = useConnection();

    const sendAirdrop = async () => {
        try {
            const response = await connection.requestAirdrop(wallet.publicKey, 10000000);
            console.log(response);
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <p>hi {wallet.publicKey?.toString()}</p>
            hello world from airdrop
            <button onClick={sendAirdrop}>Send this man some aidrop</button>
        </div>
    )
}

export default Airdrop;