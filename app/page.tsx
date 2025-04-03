import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  try {
    return (
      <section>
        <a href={socialLinks.twitter} target="_blank">
          <Image
            src="/profile.png"
            alt="Profile photo"
            className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 object-cover object-center"
            unoptimized
            width={160}
            height={160}
            priority
          />
        </a>
        <h1 className="mb-8 text-2xl font-medium tracking-tight">
          Hi, I'm Frank Peña.
        </h1>

        <div className="prose prose-neutral dark:prose-invert">
          <p>
            I'm a software developer who loves learning new things and solving
            challenging problems. When I encounter an issue, you can count on me
            to create an app to solve it.
          </p>

          <h2>A Bit About Me:</h2>
          <p>
            When I'm not coding, I enjoy hitting the gym, exploring different
            restaurants, and traveling. I believe these experiences keep my
            creativity and curiosity alive.
          </p>

          <h2>Current Role:</h2>
          <p>
            I'm currently working as a Software Engineer at Draiver, where I'm
            responsible for our mobile applications—managing everything from
            background location tracking to push notifications.
          </p>

          <Image
            src="/cartoon.jpg"
            alt="Profile photo"
            width={400}
            height={400}
            priority
            unoptimized
            style={{ maxWidth: "100%", height: "auto", display: "block" }}
          />
          {/* //projects that I'm working right now add a title  */}

          <h2 className="text-lg font-medium tracking-tight">
            Projects I'm Excited About:
          </h2>
          <div className="flex flex-col gap-4">
            <h3>GastaBien</h3>
            <p>
              I'm developing an app that helps you manage your money and
              expenses by automatically tracking your spending, so you can focus
              on saving. Check it out at{" "}
              <a href="https://gastabien.com/" target="_blank">
                https://gastabien.com/
              </a>
            </p>
            <h3>CultivizateRD</h3>
            <p>
              This recent project is a fun trivia game where the questions are
              generated using the OpenAI API. It's available on both
              <a
                href="https://play.google.com/store/apps/details?id=com.culturizateapp.quizzApp&hl=en"
                target="_blank"
              >
                Android
              </a>{" "}
              and{" "}
              <a
                href="https://apps.apple.com/do/app/cultivizate-rd/id6740942295?l=en-GB"
                target="_blank"
              >
                iOS
              </a>
            </p>

            <p>
              Feel free to explore my work and reach out if you'd like to
              connect!
            </p>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error(error);
    return <div>Error loading profile image</div>;
  }
}
