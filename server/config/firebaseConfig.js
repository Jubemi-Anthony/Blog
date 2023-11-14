import firebase from 'firebase-admin';
const firebaseConfig = {
    "type": "service_account",
    "project_id": "blog-c4cf1",
    "private_key_id": "a8076fef9b6d274783214e3b31b35fd7e9f549b9",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDil4JL/w7+TYF7\nQRjwcf2lmAW1c37aRGE3L/sXb3xdxMXP0pHKHWGQFZJeKW/3Ur2L1ExDXUSId07+\nLnz8/aRI4TVNwXfyFEqAh4j0ySWuo6j2hgQrJmQXiD2UAk8K+u17UFzaqNTL7+yx\nt6emWwGsRxwoRc0i6xZeDcTw4HrAHatYZwlC0e7+Nm+i4Fp656VBtkf23wsnpEOU\nsabSll4yCZ26nXrBZmbOqtdN8WtdESKnpQ76Z+UGOAQH8VsEs3DrX2qHZ9Nz6+4p\ntIYVWDrXGGGbjqLtubB1YlEbSM1Zkk1fjlQM+AHqyJ44F9+4iJCIc7TtUuTHG3CV\nVDiwhN23AgMBAAECggEAB4+8xmJ1kqDtgDp05Zk4OK1xC1QWWJxNjjTosSiEQvDN\nFRlWyiLe3ZsKrl+9n8hAEQl9ngXfwpoQpcTRYPPp5pC1YaniIc7xiYZ8WIbZ3hES\nE1/3haUbU/m07FqDXr9u612MK7PUnhWclXWmf5Or457f3qwto0urDGpzNwKWthB3\nUPyrBCCDxXRD3j4b38y2IJzxP7EgNFKKOeGEb2vIjf8NjwLOuVbf90fXJ4kLjtTL\nXLIhxmXs5hxnHpA5MxEYdeco8/3ezI86VaTPNt1dSbASGKasbQNYbbIu8HtkDuGH\nh6jpnwE5mweTbeGQTFwhatxGvhSKol2ylGS/5/6iCQKBgQD47QK1xAtjXnJU2UTq\nWxPZYdKFDhvZivlyKWGrwcRUlW1bxp2n/7f1qrU3Rflun8fZZ2F6eiRuAyd7T/+T\n8cKp3YiTWAAMnJRhrE7j7QEclCGyovLs/LcGnbz0hdDyqykrvGXZ2UDk5JEGdtlD\ncqpeKtzVt4SpPEZC0+YJMEabbQKBgQDpCAOFYoDK1m02PHDu5+xi9Hu3ISOo1sGy\nWarHVZ+W7F75BSngjUmfIACT0Doc07g7YZEh9XiSv/ThzTVYqCbLnpBj3jCNFSTg\nUQQkmGlcaW7OucbHL217t7w66T27R1VNCu80VGRIp/dkjFYeGKJoVELBb7b41OPR\nJ3bQA4QjMwKBgH4SS9UTPVFOfElM4QJwrlTinmSVCLXdFQkkvDrpIC5Wn9Rje2Wi\nteDOXIlp/zJv6h/JpC0Lv3eYUV663Y5oW1b8xDcb0qqQgvYU9r+pQW7f91EqBi7Q\nr0HCkfil7XV6CpgECvGSfrNur6S+fLsUUATxYHc9QwsTY+Jkv5TXxmrhAoGBALOj\nettjUPeMjwolU8XHwcGSyKAmis/IJe9wEieyCOGWe6wp39t770ocqHVKKtI4ICie\nkPwFuBogog1DXSFoFugW5yYljXXk29WUfsYbO/WCTWpNaj/4fsTFofQkA3OQjOBk\nUnwbpmcgHKVFTcnLob8dXYyyqvFtY+XDL2MxorZjAoGANBGUjIj9m8MeZZFKjJ2N\nAZztviapU7I5MLUA2ET9u64qAE091N+iA3M+fXf0zo3rX2LCwkTB1LfHKFPcd6Ji\n+luEvGnafIa8WR7DD9Vsq0OtGqtNBwf6MF1/jRrT5IvM84J0rTAocFH6Yx9VOU8w\ngkJJCUOL2O7qBIuUJHZTYVM=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-sgi7k@blog-c4cf1.iam.gserviceaccount.com",
    "client_id": "101377252141331191276",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-sgi7k%40blog-c4cf1.iam.gserviceaccount.com",
"universe_domain": "googleapis.com"
};
firebase.initializeApp({
  credential: firebase.credential.cert(firebaseConfig)
});


export const db = firebase.firestore();

export const User = db.collection('User');
export const Post = db.collection('Post');