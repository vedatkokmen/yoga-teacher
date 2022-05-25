/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";

function Testimonials() {
  return (
    <div>
      <Head>
        <title>Testimonials | Soul Sanctuary by Tyas</title>
      </Head>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="w-full text-center pb-8">
          <svg
            className="mx-auto"
            width="48"
            height="42"
            viewBox="0 0 48 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6153 19.154H10.1537C9.38437 19.154 8.73037 18.8849 8.19185 18.3463C7.65363 17.8078 7.38417 17.154 7.38417 16.3845V15.4619C7.38417 13.4233 8.10546 11.6831 9.54795 10.2406C10.9903 8.79859 12.7309 8.0773 14.7693 8.0773H16.6153C17.1152 8.0773 17.5477 7.89453 17.9133 7.52929C18.2786 7.16384 18.4613 6.73131 18.4613 6.23128V2.53864C18.4613 2.03872 18.2785 1.60578 17.9133 1.24034C17.5478 0.875398 17.1153 0.692322 16.6153 0.692322H14.7693C12.7691 0.692322 10.8608 1.08212 9.04327 1.86059C7.22595 2.63958 5.65404 3.69257 4.32694 5.01967C2.99994 6.34616 1.94726 7.91817 1.16837 9.7357C0.389491 11.553 0 13.4618 0 15.4618V35.769C0 37.3083 0.538216 38.6152 1.61515 39.6926C2.69219 40.7693 4.00019 41.3076 5.53856 41.3076H16.616C18.1542 41.3076 19.4618 40.7693 20.539 39.6926C21.6157 38.6152 22.1542 37.3083 22.1542 35.769V24.6926C22.1542 23.1536 21.6157 21.8466 20.5383 20.7692C19.4616 19.6925 18.1535 19.154 16.6153 19.154Z"
              fill="#2865E9"
            />
            <path
              d="M46.3856 20.7692C45.309 19.6925 44.0013 19.154 42.4626 19.154H36.0011C35.2322 19.154 34.5776 18.8849 34.04 18.3463C33.5012 17.8078 33.2323 17.154 33.2323 16.3845V15.4619C33.2323 13.4233 33.9536 11.6831 35.3954 10.2406C36.8372 8.79859 38.5777 8.0773 40.6171 8.0773H42.4627C42.9627 8.0773 43.3955 7.89453 43.7608 7.52929C44.1258 7.16384 44.3092 6.73131 44.3092 6.23128V2.53864C44.3092 2.03872 44.1259 1.60578 43.7608 1.24034C43.3956 0.875398 42.9628 0.692322 42.4627 0.692322H40.6171C38.6158 0.692322 36.7079 1.08212 34.8899 1.86059C33.0729 2.63958 31.5015 3.69257 30.1744 5.01967C28.8473 6.34616 27.7941 7.91817 27.0155 9.7357C26.2368 11.553 25.8468 13.4618 25.8468 15.4618V35.769C25.8468 37.3083 26.3855 38.6152 27.4622 39.6926C28.5389 40.7693 29.8466 41.3076 31.3852 41.3076H42.462C44.0006 41.3076 45.3082 40.7693 46.3849 39.6926C47.4623 38.6152 47.9999 37.3083 47.9999 35.769V24.6926C48 23.1535 47.4623 21.8466 46.3856 20.7692Z"
              fill="#2865E9"
            />
          </svg>

          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 pb-2">
            Find some testimonials about me
          </h1>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 border-2">
            <div className="flex items-center space-x-6 mb-4">
              <Image
                className="h-28 w-28 object-cover object-center rounded-full"
                src="/1.jpg"
                alt="photo"
                height="100"
                width="100"
              />
              <div>
                <p className="text-xl text-gray-700 font-normal mb-1">
                  Nádia Baena
                </p>
                <p className="text-base text-blue-600 font-normal">Architect</p>
              </div>
            </div>
            <div>
              <p className="text-gray-400 leading-loose font-normal text-base indent-6 indent-6">
                I started my classes with Tyas in mid-April/2022, and in just
                one month, I can see and feel huge changes in my body and
                emotions. I started practice yoga in August 2021, but it was not
                constant, and I did not see much progress. So this year, I
                decided that I wanted to learn and make yoga part of my routine.
                I met Tyas while looking for a private teacher, and she has been
                the best choice I could have made. I have improved a lot with
                her. At first, she corrected me and adjusted the postures a lot,
                but now I can see/feel when the asana is not correct, and she
                guides me in practice. The best progress has been in headstand
                (Sirsasana) without help or support. I remember trying to do it
                in our first week, and it seemed impossible, but with many
                exercises to strengthen the core and breathing, in 21 classes, I
                did it alone, and it was the best feeling in the world. Tyas is
                very dedicated to the practice. She does it with her heart. Her
                classes are very fun, I always have a great time! I could spend
                hours saying good things about this young yoga teacher, but I
                think the best thing is to try a class with her and have no
                doubts that she is an excellent teacher and person.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 border-2">
            <div className="flex items-center space-x-6 mb-4">
              <Image
                className="h-28 w-28 object-cover object-center rounded-full"
                src="/1.jpg"
                alt="photo"
                height="100"
                width="100"
              />
              <div>
                <p className="text-xl text-gray-700 font-normal mb-1">
                  Meta Sasmita
                </p>
                <p className="text-base text-blue-600 font-normal">
                  Graphic Designer
                </p>
              </div>
            </div>
            <div>
              <p className="text-gray-400 leading-loose font-normal text-base indent-6">
                I have never been much a yoga person and only started exploring
                it consistently this year. I first came across Tyas during one
                of her love & kindness meditation yoga session and I’ve been
                hooked ever since! I come out of that class like a brand new
                woman, every single time. I also started going to the Hatha Flow
                classes and have been seeing progress with my flexibility. Tyas
                is a patient, dedicated yoga teacher and her voice is super
                calming. Thank you for making yoga an integral part of my life
                now 💗
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 border-2">
            <div className="flex items-center space-x-6 mb-4">
              <Image
                className="h-28 w-28 object-cover object-center rounded-full"
                src="/1.jpg"
                alt="photo"
                height="100"
                width="100"
              />
              <div>
                <p className="text-xl text-gray-700 font-normal mb-1">
                  Jade Bradley
                </p>
                <p className="text-base text-blue-600 font-normal">Dev Ops</p>
              </div>
            </div>
            <div>
              <p className="text-gray-400 leading-loose font-normal text-base indent-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 border-2">
            <div className="flex items-center space-x-6 mb-4">
              <Image
                className="h-28 w-28 object-cover object-center rounded-full"
                src="/2.jpg"
                alt="photo"
                height="100"
                width="100"
              />
              <div>
                <p className="text-xl text-gray-700 font-normal mb-1">
                  Lucy Carter
                </p>
                <p className="text-base text-blue-600 font-normal">
                  Graphic Designer
                </p>
              </div>
            </div>
            <div>
              <p className="text-gray-400 leading-loose font-normal text-base indent-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 border-2">
            <div className="flex items-center space-x-6 mb-4">
              <Image
                className="h-28 w-28 object-cover object-center rounded-full"
                src="/3.jpg"
                alt="photo"
                height="100"
                width="100"
              />
              <div>
                <p className="text-xl text-gray-700 font-normal mb-1">
                  Dany Bailey
                </p>
                <p className="text-base text-blue-600 font-normal">
                  Software Engineer
                </p>
              </div>
            </div>
            <div>
              <p className="text-gray-400 leading-loose font-normal text-base indent-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 border-2">
            <div className="flex items-center space-x-6 mb-4">
              <Image
                className="h-28 w-28 object-cover object-center rounded-full"
                src="/4.jpg"
                alt="photo"
                height="100"
                width="100"
              />
              <div>
                <p className="text-xl text-gray-700 font-normal mb-1">
                  Jade Bradley
                </p>
                <p className="text-base text-blue-600 font-normal">Dev Ops</p>
              </div>
            </div>
            <div>
              <p className="text-gray-400 leading-loose font-normal text-base indent-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
