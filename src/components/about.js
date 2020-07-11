import React from 'react'
import Navbar from './navbar'
import Footer from './footer'



export default function About() {
  return (
    <div>
    <>
    <Navbar />
    </>
    <div class="mx-12 my-12 sm:mt-6 sm:mb-40 sm:mx-8 w-auto sm:p-12">
      <div class="max-w-screen-xl m-auto">
        <h2 class="text-6xl leading-9 text-center pb-4 sm:pb-8 font-bold text-teal-800">
          Quem somos?
        </h2>
        <div class="mt-6 border-t border-teal-100 pt-10">
          <dl class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <div>
                <dt class="text-lg leading-6 font-medium text-teal-900">
                  What's the best thing about Switzerland?
                </dt>
                <dd class="mt-2">
                  <p class="text-base leading-6 text-teal-700">
                    I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </p>
                </dd>
              </div>
              <div class="mt-12">
                <dt class="text-lg leading-6 font-medium text-teal-900">
                  How do you make holy water?
                </dt>
                <dd class="mt-2">
                  <p class="text-base leading-6 text-teal-700">
                    You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </p>
                </dd>
              </div>
              <div class="mt-12">
                <dt class="text-lg leading-6 font-medium text-teal-900">
                  What do you call someone with no body and no nose?
                </dt>
                <dd class="mt-2">
                  <p class="text-base leading-6 text-teal-700">
                    Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </p>
                </dd>
              </div>
            </div>
            <div class="mt-12 md:mt-0">
              <div>
                <dt class="text-lg leading-6 font-medium text-teal-900">
                  Why do you never see elephants hiding in trees?
                </dt>
                <dd class="mt-2">
                  <p class="text-base leading-6 text-teal-700">
                    Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </p>
                </dd>
              </div>
              <div class="mt-12">
                <dt class="text-lg leading-6 font-medium text-teal-900">
                  Why can't you hear a pterodactyl go to the bathroom?
                </dt>
                <dd class="mt-2">
                  <p class="text-base leading-6 text-teal-700">
                    Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </p>
                </dd>
              </div>
              <div class="mt-12">
                <dt class="text-lg leading-6 font-medium text-teal-900">
                  Why did the invisible man turn down the job offer?
                </dt>
                <dd class="mt-2">
                  <p class="text-base leading-6 text-teal-700">
                    He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </p>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
    <>
    <Footer />
    </>
    </div>


  )
}