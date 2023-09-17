import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
const FB_PROJECT_ID = "sveltekit-b91cd";
const FB_CLIENT_EMAIL = "firebase-adminsdk-akaa4@sveltekit-b91cd.iam.gserviceaccount.com";
const FB_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCwH6R0GzeIdal5\nx+FGpfKogEByxudS19w+PSCUBWsoW/CVmMNM0iMFBH+8qibZrgGIfp+i12CxkUzl\ncrSbwxe50I7HBlNfuvrhh9tC5Mp7vjCc+8uAwjx5Axjhladkd/HJ87ghfD3L9iML\nmlSOtg5toIdKPPcLbtkNTgDcVRlL+GD7l90DJ4iJE+gtJnHD6EA32CM0ab0UFKFE\n5Yu5N5tw7Q4gE9o+37ec6x0qZjaqyO8jkSDXfTIMdvnD/QieDhUfzk449C0JedEZ\nMWg3BnuhhLsUFtxq13fbeHe89ZohFeZPCDExf8X6KLxUaCjh7l8HI32Hgb9SJTqv\nUZS7yow7AgMBAAECggEAAsLG4y23YHjntTRVlbPtlTKdeq8fhS7uZuiyZV+dtGjs\ni+EfKUnJ/r7OpHh5BMSI2vORMQ5LQmf9WpjCYrFbjTAgbNeZNaZKtH+wB4u/7idR\nv8Q6sRlaX/3qb+7WoZPibcCs9ulpq+l/LHljhfEt/Lide6PFA6AzNYAu3JqrkNic\nlBrH9Vg5roBRBFXZM2I8oN8Fja7pg50V7HUnNOW8VBK3fWkbTLrCsBReyGBSEwPQ\nuJJFLtPEUibSDXDrJOdGnd5YjC4VU22p3PQvRbfZjZMBLGlYXnanwxWCkXYuvU5K\nLKX/qDX74VEsr8NJceCdpHzhgyOTu8DRxNX4bha6AQKBgQDX7pABm8XbaC+n0w0t\nHk4GlfA81WWf6x4JJvqcI8+zxR1Wb7Myo2Ch+ctzB2tBOKToPJXdjWIrrd+TU8XL\ngpulmT0V36JRZCsIuQ72ksxGX3J2S4OzlqYc+n6fK9zA5YW9nuSMUbBRCfq6exZT\nuPa3DUHYRtyBVlp/HVInH8btuwKBgQDQzg/7RMgWGula74//Zci8ww1WqagdMfNj\nEgVEdhsD9c8pdBdh4BdmqdZatWUAPlZDRpbRYsmrWlHonaiOjaMQYfIiSguLMkSo\n0upnMyX0x1TdbrzUJwAgIpxnW+pzBs+VGcCOj6k5o6pEuuzcA2hovUf6ouL9XIFs\nlI37IkmzgQKBgQCg1TIx4ILYz5tfV1XjG0VmpluQFCpjmM6AZqYXkpzr+4/Eh+Jj\nf0lEnDgrb4U1ySkbSbUelmZevl1e8PDMinXAPIlBN5dBJGjhUGWSxvicGg+5iLmK\nFFWaFAIoMJV2n/6jpCv7UAUR92rnZzLUHVq2MYuvuegX9efl8kL0nTigbQKBgA6z\nU0C3ePbFckRqtVKf0eAoQ1okm6diiuYgsKo/Pmuq9KjQeYz0f/FEZ8j/GFtKCDy4\nTYn0UIp102pzHxjaM+7FVoy/dcyY/2h7YPFfEn8HQZxNXZH6JPIePbCxMfJjOl4e\n8AWZa6qZMTWhi2d5/fHR0a19pkl8J8iDNPPHWDUBAoGBAKw744zJW1qiLSgvUD/S\ntgw7LttsC6qXYQ/c7cKBNeX3L57S7SZ7y36KWnLhyO8sYGWtItkYp3DfOZBWl/Wc\nHXgcqnDZKk/kx39T5muaOGSY7YZ464W0MmL8Hg9xQ/pJqHGVlbcTYEzaXrxdffkn\nDkntl775je/mB5R40fra626v\n-----END PRIVATE KEY-----\n";
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY
    })
  });
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin Error: ", err.stack);
  }
}
const adminDB = getFirestore();
const adminAuth = getAuth();
export {
  adminAuth as a,
  adminDB as b
};
