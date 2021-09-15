/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { CameraIcon } from '@heroicons/react/solid';
import { ChatAltIcon } from '@heroicons/react/solid';

export default function AboutDawn() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              A bit more about me
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet Dawn
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="/images/dawn/dawn_in_old_studio.jpg"
                    alt="dawn doing yoga with friends"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <ChatAltIcon
                    className="flex-none w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2">
                    The best things in life seem to occur when you are in
                    balance. <br />
                    Living in this moment, not the past and not the future
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
                A little about me, I am an honest to goodness bibliophile who
                loves a good story, fantastic tea, and my yoga mat. My yoga
                journey began a few decades ago as I entered into adulthood.
              </p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                Externally it appeared to be nothing special. I read books about
                yoga and meditation, practiced different postures and sequences
                at home, and then went to class to learn and improve.
              </p>
              <p>
                I practiced Iyengar for seven years, then I tried other
                practices like ashtanga, anusara, bikram, hatha and yin.
                Internally is where the change took place, I felt less stress, I
                lost my fears, I stayed present,{' '}
                <span className="font-bold">I found self-confidence.</span>
              </p>
              <h3>Dealing with Grief</h3>
              <p>
                In 2017, life had come to a standstill. There was just too much
                grief from losing my mom, aunts, uncles, cousins, friends, and
                even my dogs.
              </p>
              <p>
                The practice was no longer working the way it had, and through
                fate, I found myself in Faith Hunter’s 200-hour teacher Training
                Academy. Faith provided me with a practice method called
                'Spiritually Fly' that offered breath, mantra, mudras, and
                meditation within a vinyasas practice. In learning how to become
                a teacher, I learned how to teach myself how to heal my soul,
                thus a new journey began.
              </p>

              <h3>Starting to Heal</h3>
              <p>
                In the years that followed, I taught as many classes as I could,
                and I found I loved leading people through moving meditations.
                Off the mat, I have always been obsessed with health and
                vitality. I studied alternative health modalities such as
                herbalism, reiki, reflexology, and thai yoga.
              </p>
              <p>
                More formal training and experience comes from my work in
                healthcare administration, public health epidemiology and
                primary research, and public policy evaluation.
              </p>
              <p>
                I continued my yoga studies in: yin yoga, restorative yoga, yoga
                nidra and anatomy, and in 2018, I found myself in a training
                class under the guidance of{' '}
                <a href="https://dianatokaji.com/">Diana Tokaji</a>.
              </p>
              <p>
                She taught me how to support people when they experience acute
                trauma. Then the light came on, this is how I wanted to teach
                yoga, I wanted to help other people heal, create their own peace
                or reveal parts of themselves that have been hidden.
              </p>

              <h3>Where I am now</h3>
              <p>
                Today, I primarily work with people one on one with people. My
                clients often feel stuck and they are searching for ways to
                evolve or they suffer from addiction, grief, and trauma
                resulting from interpersonal violence and sexual assault.
              </p>
              <p>
                I offer yoga as a reflexive practice using tools like
                intersectionality and the philosophy of phenomenology bounded by
                the classical yoga practice to help people become conscious of
                the secrets hidden in their body.
              </p>
              <p className="border-t-2 border-gray-100 pt-6">
                I sincerely believe the more we understand the interconnection
                of body, mind, and spirit, the easier it is to create a
                harmonious existence and a path to living your life in a more
                rewarding and fulfilling way.
              </p>
              <p>
                No matter what has happened in the past, today, you can wipe the
                surface clean, begin again, and rewrite your own story. I hope
                to meet you on the mat one day. Until then may you find the
                peace you seek.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
