import * as IPFS from 'ipfs-core'

async function ipfsCore() {
    return await IPFS.create({repo: 'ok' + Math.random()});
}

async function CreateKey(obj) {
    const ipfs_core = await ipfsCore();
    return await ipfs_core.dag.put(obj)
}



export default CreateKey;