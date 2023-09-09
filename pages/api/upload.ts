import {ThirdwebStorage} from '@thirdweb-dev/storage';
import fs from 'fs';

const storage = new ThirdwebStorage();

(async () => {
    try {
        const upload = await storage.upload(fs.readFileSync('../ipfs/legal.pdf'));
        console.log('Upload URL: ', storage.resolveScheme(upload));
    } catch (error) {
        console.error('Error:', error);
    }
})();
