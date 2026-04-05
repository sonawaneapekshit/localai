import Image from 'next/image';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/components/custom/Header';
import {
  AArrowDown,
  ArrowDownNarrowWide,
  ArrowRight02FreeIcons,
  Brain01FreeIcons,
  Chat01FreeIcons,
  Chat01Icon,
  DownloadSquareFreeIcons,
  IncognitoIcon,
  Layers01FreeIcons,
  Lightning,
  Moon01FreeIcons,
  Shield01FreeIcons,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Local.ai',
  description: 'Your very own privacy first local ai chat app',
};

export default function Home() {
  return (
    <>
      <section className="flex justify-center items-center min-h-64 py-8 md:py-24">
        <div className="flex-3/6 flex flex-col gap-4 md:gap-8">
          <div className="flex gap-2">
            <HugeiconsIcon
              className="shadow-xl shadow-emerald-500/50"
              color="bg-emerald-500"
              icon={Shield01FreeIcons}
              size={24}
            />{' '}
            <b>100% PRIVATE</b> &bull; <b>RUNS LOCALLY</b>
          </div>
          <h2 className="text-4xl md:text-6xl text-accent-foreground">
            Privacy AI Chat
            <br />
            <span>Powered</span> <span>Locally</span>
          </h2>
          <p className="text-2xl md:text-2xl text-accent-foreground">
            Chat with powerful LLMs running on your own machine.
            <br />
            Your data stays private
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Button
              className="bg-primary rounded-2xl text-accent-foreground text-2xl py-6 px-6 min-w-24"
              variant="fill"
              size="lg"
            >
              Start Chatting{' '}
              <HugeiconsIcon
                className="text-4xl"
                icon={ArrowRight02FreeIcons}
                size={40}
              />
            </Button>
            <Button
              className="bg-accent-foreground rounded-2xl text-accent text-2xl py-6 px-6 min-w-24"
              variant="fill"
              size="lg"
            >
              View Demo
            </Button>
          </div>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
            <li className="flex gap-4 items-center">
              <HugeiconsIcon
                color="text-accent-foreground"
                icon={IncognitoIcon}
              />{' '}
              <div>
                <h6 className="text-accent-foreground">100% Private</h6>
                <p className="text-muted-foreground">Your data stays local</p>
              </div>
            </li>
            <li className="flex gap-4 items-center">
              {' '}
              <HugeiconsIcon
                color="text-accent-foreground"
                icon={IncognitoIcon}
              />{' '}
              <div>
                <h6 className="text-accent-foreground">100% Private</h6>
                <p className="text-muted-foreground">Your data stays local</p>
              </div>
            </li>
            <li className="flex gap-4 items-center">
              {' '}
              <HugeiconsIcon
                color="text-accent-foreground"
                icon={IncognitoIcon}
              />{' '}
              <div>
                <h6 className="text-accent-foreground">100% Private</h6>
                <p className="text-muted-foreground">Your data stays local</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex-3/6 flex justify-center">
          <div className="min-w-10 min-h-10 flex justify-center items-center rounded-4xl p-12 text-accent-foreground bg-violet-500 shadow-lg shadow-violet-500/50">
            <HugeiconsIcon
              color="text-accent-foreground"
              icon={Chat01Icon}
              size={160}
            />
          </div>
        </div>
      </section>
      <section className="flex flex-wrap justify-center items-center min-h-64 py-8 md:py-24">
        <Card className="flex-1/6 flex flex-col gap-6">
          <CardHeader>
            <CardTitle className="flex flex-col items-center justify-center gap-6">
              <HugeiconsIcon
                color="text-primary"
                icon={Shield01FreeIcons}
                size="36"
                className="text-primary"
              />
              <h3 className="text-foreground text-xl text-xl">Privacy First</h3>
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="flex-1/6 flex flex-col gap-6">
          <CardHeader>
            <CardTitle className="flex flex-col items-center justify-center gap-6">
              <HugeiconsIcon
                color="bg-primary"
                icon={Lightning}
                size="36"
                className="text-primary"
              />
              <h3 className="text-foreground text-xl">Privacy First</h3>
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="flex-1/6 flex flex-col gap-6">
          <CardHeader>
            <CardTitle className="flex flex-col items-center justify-center gap-6">
              <HugeiconsIcon
                color="bg-primary"
                icon={Chat01FreeIcons}
                size="36"
                className="text-primary"
              />
              <h3 className="text-foreground text-xl">Privacy First</h3>
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="flex-1/6 flex flex-col gap-6">
          <CardHeader>
            <CardTitle className="flex flex-col items-center justify-center gap-6">
              <HugeiconsIcon
                color="bg-primary"
                icon={Brain01FreeIcons}
                size="36"
                className="text-primary"
              />
              <h3 className="text-foreground text-xl">Privacy First</h3>
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="flex-1/6 flex flex-col gap-6">
          <CardHeader>
            <CardTitle className="flex flex-col items-center justify-center gap-6">
              <HugeiconsIcon
                color="bg-primary"
                icon={Layers01FreeIcons}
                size="36"
                className="text-primary"
              />
              <h3 className="text-foreground text-xl">Privacy First</h3>
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="flex-1/6 flex flex-col gap-6">
          <CardHeader>
            <CardTitle className="flex flex-col items-center justify-center gap-6">
              <HugeiconsIcon
                color="bg-primary"
                icon={Moon01FreeIcons}
                size="36"
                className="text-primary"
              />
              <h3 className="text-foreground text-xl">Privacy First</h3>
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
        </Card>
      </section>
      {/* How it works sections */}
      {/* App screnshot*/}
      {/* What users are saying */}
      {/* LocalAi vs Cloud*/}
      {/* FAQ */}
      <section className="grid grid-cols-1 gap-6 min-h-64 py-8 md:py-24">
        <h4 className="text-foreground text-2xl font-bold">
          Frequently Asked Questions
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="flex w-full">
            <CardContent>
              <Collapsible className="rounded-md">
                <CollapsibleTrigger asChild>
                  <Button className="w-full flex items-center justify-between text-accent-foreground text-lg font-bold bg-transparent hover:bg-transparent focus:bg-transparent focus:outline-1">
                    What is Ollama?
                    <HugeiconsIcon
                      color="text-accent-foreground"
                      icon={AArrowDown}
                      size={24}
                      className='"ml-auto group-data-[state=open]:rotate-180"'
                    />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Officia ipsum aliquid, optio cumque perferendis quibusdam
                    exercitationem ipsam illo nam qui.
                  </div>
                  <Button size="xs">Learn More</Button>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
          <Card className="flex w-full">
            <CardContent>
              <Collapsible className="rounded-md">
                <CollapsibleTrigger asChild>
                  <Button className="w-full flex items-center justify-between text-accent-foreground text-lg font-bold bg-transparent hover:bg-transparent focus:bg-transparent focus:outline-1">
                    Which models are supported?
                    <HugeiconsIcon
                      color="text-accent-foreground"
                      icon={AArrowDown}
                      size={24}
                      className='"ml-auto group-data-[state=open]:rotate-180"'
                    />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Magnam aspernatur impedit iure earum praesentium unde, eos
                    autem ipsa sequi est?
                  </div>
                  <Button size="xs">Learn More</Button>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
          <Card className="flex w-full">
            <CardContent>
              <Collapsible className="rounded-md">
                <CollapsibleTrigger asChild>
                  <Button className="w-full flex items-center justify-between text-accent-foreground text-lg font-bold bg-transparent hover:bg-transparent focus:bg-transparent focus:outline-1">
                    Does it work without internet?
                    <HugeiconsIcon
                      color="text-accent-foreground"
                      icon={AArrowDown}
                      size={24}
                      className='"ml-auto group-data-[state=open]:rotate-180"'
                    />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    expedita error aut id harum blanditiis magni ducimus
                    asperiores? Aperiam, provident.
                  </div>
                  <Button size="xs">Learn More</Button>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
          <Card className="flex w-full">
            <CardContent>
              <Collapsible className="rounded-md">
                <CollapsibleTrigger asChild>
                  <Button className="w-full flex items-center justify-between text-accent-foreground text-lg font-bold bg-transparent hover:bg-transparent focus:bg-transparent focus:outline-1">
                    Is my data ever stored?
                    <HugeiconsIcon
                      color="text-accent-foreground"
                      icon={AArrowDown}
                      size={24}
                      className='"ml-auto group-data-[state=open]:rotate-180"'
                    />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                  <div>
                    This panel can be expanded or collapsed to reveal additional
                    content.
                  </div>
                  <Button size="xs">Learn More</Button>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
