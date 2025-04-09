import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import CopyToClipboard from 'react-copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { hybrid } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import {
  Color,
  Shape,
  Size,
  Type,
} from '@site/src/components/common/button/button.types';
import TextButton from '@site/src/components/common/button/text-button';
import CopyIconSvg from '@site/src/components/svg/copy-icon';
import RightLineArrowIconSvg from '@site/src/components/svg/right-line-arrow-icon';

import CodeSwitcher from '@site/src/components/home/code-switcher';
import FeatureCard from '@site/src/components/home/feature-card';
import ImageCard from '@site/src/components/home/image-card';

import React from 'react';
import styles from './index.module.css';

function AdvancedAppFeaturesSection() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="flex w-full items-center justify-center gap-[100px] overflow-hidden bg-gradient-to-b from-[#FFF7E6] to-[#FFF] p-default max-nacho-sm:px-sm-default nacho-sm:pt-[170px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center justify-center gap-[48px]">
        <Heading
          as="h1"
          className="text-center break-keep text-heading1 text-gray-9 max-nacho-sm:text-sm-heading1"
        >
          {siteConfig.title}
        </Heading>
        <h3
          className={`break-keep text-center font-semibold text-gray-7 ${styles.subtitle}`}
        >
          API & SDK로 쉽고 간편하게,
          <br className="md:hidden" /> 코드 몇 줄로 빠르게 앱을 개발하세요.
        </h3>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            nachocode 시작하기 - 5min ⏱️
          </Link>
        </div>
        <img
          src="/img/developer/advanced-app-features-image.png"
          alt="App Features"
          width="2156"
          height="1564"
          className="size-auto max-h-[782px] max-w-full"
        />
      </div>
    </div>
  );
}

const DeveloperSdkSupportSection = () => {
  const codeSnippet1 = `<script src="https://cdn.nachocode.io/nachocode/client-sdk/@latest/client-sdk.min.js"></script>`;
  const codeSnippet2 = `<script>
  // SDK가 로드되었는지 확인한 후 초기화를 시도합니다.
  if (window.Nachocode) {
    Nachocode.init('your_api_key_here', { logger: true });
  } else {
    console.error('Nachocode SDK is not loaded.');
  }
</script>`;

  return (
    <div className="flex w-full flex-col items-center justify-center px-default pb-default pt-0 max-nacho-sm:px-sm-default nacho-sm:py-[159px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center justify-center gap-default nacho-sm:gap-[80px]">
        <div className="flex flex-col items-center justify-center gap-content">
          <h3 className={`break-keep font-bold text-gray-9 ${styles.title}`}>
            개발자 SDK 지원
          </h3>
          <p
            className={`whitespace-pre-line break-keep text-center font-medium text-gray-7 ${styles.subtitle}`}
          >
            <span className="max-[630px]:hidden">
              웹 개발자도 쉽게 네이티브 앱 기능을 사용할 수 있도록,
              <br />
              nachocode SDK를 웹페이지에 통합하는 과정은 매우 간단합니다.
            </span>
            <span className="break-keep min-[630px]:hidden">
              nachocode SDK로 쉽게{' '}
              <span className="max-[550px]:hidden">네이티브 </span>앱 기능을
              사용해보세요.
            </span>
          </p>
          <ul className="m-0 flex list-none flex-col items-center justify-center gap-1 min-[480px]:flex-row md:gap-2 lg:gap-4 xl:gap-6">
            <li>
              <TextButton
                type={Type.text}
                text="서비스 소개"
                size={Size.large}
                color={Color.primary}
                shape={Shape.square}
                onClick={() => {
                  window.location.href = '/docs/intro';
                }}
                endIcon={<RightLineArrowIconSvg fill="#F79E40" />}
                keepText
              />
            </li>
            <li>
              <TextButton
                type={Type.text}
                text="SDK 가이드"
                size={Size.large}
                color={Color.primary}
                shape={Shape.square}
                onClick={() => {
                  window.location.href = '/docs/sdk/intro';
                }}
                endIcon={<RightLineArrowIconSvg fill="#F79E40" />}
                keepText
              />
            </li>
            <li>
              <TextButton
                type={Type.text}
                text="API 가이드"
                size={Size.large}
                color={Color.primary}
                shape={Shape.square}
                onClick={() => {
                  window.location.href = '/docs/api/intro';
                }}
                endIcon={<RightLineArrowIconSvg fill="#F79E40" />}
                keepText
              />
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center max-w-full gap-6">
          <div className="flex w-full flex-col rounded-[10px] bg-gray-9">
            <div className="flex items-center justify-between rounded-t-[10px] bg-gray-black px-6 py-4">
              <div className="text-[16px] font-medium leading-[28px] text-gray-4">
                SDK 불러오기
              </div>
              <CopyToClipboard text={codeSnippet1}>
                <button
                  type="button"
                  className="transition-transform duration-200 hover:scale-125 active:scale-75"
                >
                  <CopyIconSvg />
                </button>
              </CopyToClipboard>
            </div>
            <div className="scroll-container flex items-center justify-start rounded-b-[10px] px-6 py-5">
              <SyntaxHighlighter
                language="javascript"
                style={hybrid}
                customStyle={{
                  backgroundColor: '#191919',
                }}
              >
                {codeSnippet1}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="flex w-full flex-col rounded-[10px] bg-gray-9">
            <div className="flex items-center justify-between rounded-t-[10px] bg-gray-black px-6 py-4">
              <div className="text-[16px] font-medium leading-[28px] text-gray-4">
                SDK 초기화
              </div>
              <CopyToClipboard text={codeSnippet2}>
                <button
                  type="button"
                  className="transition-transform duration-200 hover:scale-125 active:scale-75"
                >
                  <CopyIconSvg />
                </button>
              </CopyToClipboard>
            </div>
            <div className="scroll-container flex items-center justify-start rounded-b-[10px] px-6 py-5">
              <SyntaxHighlighter
                language="javascript"
                style={hybrid}
                customStyle={{
                  backgroundColor: '#191919',
                }}
              >
                {codeSnippet2}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NativeAppFeaturesSection = () => {
  const data = [
    {
      title: '진동 / 햅틱 피드백',
      description:
        '사용자에게 촉각적인 경험을 제공하도록, 햅틱 피드백 및 진동 기능과 설정을 지원합니다.',
    },
    {
      title: '생체 인증',
      description:
        '지문, 얼굴 인증등 개인의 고유한 생체 정보로  간편하고 안전한 로그인을 제공할 수 있습니다.',
    },
    {
      title: 'QR 리더기',
      description:
        'QR 리더기는 카메라를 통해 QR 코드를 스캔하여 특정 작업(웹사이트 방문, 정보 저장 등)을 실행합니다.',
    },
    {
      title: '권한 요청 시점 제어',
      description:
        '카메라, 위치, 푸시 권한을 사용하는 시점에 요청하거나 제어할 수 있도록 지원합니다.',
    },
    {
      title: 'Back / Foreground 감지',
      description:
        '앱이 Foreground(화면 활성화 상태)인지, Background(백그라운드 실행 상태)인지 감지할 수 있습니다.',
    },
    {
      title: '안드로이드 백 키 제어',
      description:
        '안드로이드 네이티브 백 키가 눌렸을 때특정 작업을 실행할 수 있는 기능을 제공합니다.',
    },
  ];

  return (
    <div className="flex w-full flex-col items-center justify-center p-default max-nacho-sm:px-sm-default nacho-sm:py-[238px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center justify-center gap-default">
        <div className="flex flex-col items-center justify-center gap-content">
          <h3
            className={`break-keep text-center font-bold text-gray-9 ${styles.title}`}
          >
            이렇게나 많은 <br className="hidden max-[631px]:inline" /> 네이티브
            앱 기능
          </h3>
          <p
            className={`break-keep text-center font-semibold text-gray-7 ${styles.subtitle}`}
          >
            <span className="max-[550px]:hidden">웹 개발자도 OK! </span>네이티브
            앱 기능을 코드 몇 줄로&nbsp;
            <br className="hidden max-[550px]:inline max-[340px]:hidden" />
            쉽게 사용할 수 있어요.
          </p>
        </div>
        <div className="flex flex-row flex-wrap items-stretch justify-center max-w-full min-w-0 gap-content">
          {data.map((item, idx) => {
            return (
              <div key={idx} className="max-w-full w-fit">
                <FeatureCard
                  title={item.title}
                  description={item.description}
                  isReady={!!item.isReady}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const EnhancedUserExperienceSection = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center px-default pb-default pt-0 max-nacho-sm:px-sm-default nacho-sm:py-[160px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center justify-center gap-default">
        <div className="flex flex-col items-center justify-center gap-content">
          <h3
            className={`break-keep text-center font-bold text-gray-9 ${styles.title}`}
          >
            사용자 경험을&nbsp;
            <br className="hidden max-[650px]:inline" />
            강화하는 앱 기능
          </h3>
          <p
            className={`break-keep text-center font-semibold  text-gray-7 ${styles.subtitle}`}
          >
            사용자가 앱과 상호 작용하고&nbsp;
            <br className="hidden max-[712px]:inline max-[310px]:hidden" />
            몰입할 수 있는 기능을 제공합니다.
          </p>
        </div>
        <div className="flex max-w-full flex-col items-center justify-center gap-content min-[1236px]:flex-row min-[1236px]:items-stretch">
          <div className="flex flex-col items-center justify-center max-w-full gap-content">
            <ImageCard
              clipDirection="upward"
              imageSrc="/img/developer/use-experience-personal-push-image.png"
              imageAlt="User Experience Personal Push image"
              imageWidth={591}
              imageHeight={953}
              justifyContent="end"
            />
            <FeatureCard
              title="개인화 푸시"
              description="사용자 데이터(행동, 위치, 통계 정보 등)를 활용해 맞춤형 알림을 보내는 기능입니다."
            />
          </div>
          <div className="flex flex-col items-center justify-center max-w-full gap-content">
            <ImageCard
              clipDirection="downward"
              imageSrc="/img/developer/use-experience-in-app-image.png"
              imageAlt="User Experience In App Purchase image"
              imageWidth={591}
              imageHeight={953}
              justifyContent="end"
            />
            <FeatureCard
              title="인앱결제"
              description="플레이스토어, 앱 스토어에 상품을 등록해 사용자가 앱 내에서 디지털 콘텐츠를 구매할 수 있는 기능입니다."
              isReady
            />
          </div>
          <div className="flex flex-col items-center justify-center max-w-full gap-content">
            <ImageCard
              clipDirection="upward"
              imageSrc="/img/developer/use-experience-native-share-image.png"
              imageAlt="User Experience Native Share Image"
              imageWidth={591}
              imageHeight={953}
              justifyContent="end"
            />
            <FeatureCard
              title="네이티브 공유하기"
              description="앱에서 OS 기본 공유 인터페이스를 호출하여 사용자가 콘텐츠(텍스트, 이미지, 파일 등)을 공유할 수 있는 기능입니다."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface Tab {
  label: string;
  snippets: Record<string, string>; // snippets의 모든 값은 string이어야 함
}

const AppResourceIntegrationSection = () => {
  const browserSnippetsa: Tab[] = [
    {
      label: '기본',
      snippets: {
        기본: `// 기본 옵션 : 'external'
Nachocode.browser.openLink('https://nachocode.io');`,
        '외부 브라우저': `// 외부 브라우저로 URL 오픈
Nachocode.browser.openLink('https://nachocode.io', 'external');`,
        '내부 브라우저': `// 내부 브라우저로 URL 오픈
Nachocode.browser.openLink('https://nachocode.io', 'internal');`,
      },
    },
  ];

  const useDeviceSnippets: Tab[] = [
    {
      label: '디바이스 OS',
      snippets: {
        '디바이스 OS': `// 디바이스의 OS 정보를 불러옵니다.
const deviceOS = Nachocode.device.getDeviceOS();
console.log(deviceOS); // ex. { os: 'Android', version: '34(14)' }`,
        '디바이스 모델': `// 디바이스의 모델명을 불러옵니다.
const deviceModel = Nachocode.device.getDeviceModel();
console.log(deviceModel); // ex. SM-S928N`,
        '실행 환경': `const runningEnv = Nachocode.env.getRunningEnv(); // 'web' | 'app'`,
        '앱 정보': `const appName = Nachocode.app.getAppName(); // 앱 이름

const appVersion = Nachocode.app.getCurrentAppVersion(); // 앱 버전
`,
      },
    },
  ];

  const dataSnippets: Tab[] = [
    {
      label: '데이터 불러오기',
      snippets: {
        '데이터 불러오기': `// ex. 'sample'을 키로 앱 내부 저장소의 데이터를 조회합니다.
Nachocode.preference.getData('sample', data => {
  if (data) {
    alert('Received Data : ' + data);
  } else {
    alert('No received data!');
  }
});`,
        '데이터 저장하기': `// ex. 'sample'을 키로 앱 내부 저장소에 데이터를 저장합니다.
Nachocode.preference.setData('sample', 'sample data');

// ex. 'sample'을 키로 앱 내부 저장소의 데이터를 조회합니다.
Nachocode.preference.setData('sample', data => {
  if (data) {
    alert(data); // sample data
  } else {
    alert('No received data!');
  }
});`,
      },
    },
  ];

  return (
    <div className="flex w-full flex-col items-center justify-center px-default pb-default pt-0 max-nacho-sm:px-sm-default nacho-sm:py-[105px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center justify-center gap-default nacho-sm:gap-[114px]">
        <div className="flex flex-col items-center justify-center gap-content">
          <h3
            className={`break-keep text-center font-bold text-gray-9 ${styles.title}`}
          >
            앱 정보와 리소스&nbsp;
            <br className="hidden max-[680px]:inline" />
            활용을 유연하게
          </h3>
          <p
            className={`break-keep text-center font-semibold text-gray-7 ${styles.subtitle}`}
          >
            앱 내외부의 다양한 정보에 쉽게 접근하고,&nbsp;
            <br className="inline max-[520px]:hidden nacho-md:hidden" />
            필요한 리소스를 유연하게 활용해보세요.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-default">
          <div className="flex w-full flex-col items-center justify-center gap-content nacho-sm:gap-[48px] lg:flex-row lg:items-start">
            <CodeSwitcher tabs={browserSnippetsa} />
            <div className="flex w-full flex-col items-start justify-start gap-4 p-[24px]">
              <h3 className="break-keep text-sm-text1 !font-semibold text-gray-9 max-[1024px]:w-full max-[1024px]:text-center nacho-sm:text-text1">
                내부 / 외부 브라우저
              </h3>
              <p className="whitespace-pre-line break-keep text-sm-text2 text-gray-7 max-[1024px]:w-full max-[1024px]:text-center nacho-sm:text-text2">
                사용자가 앱 내에서 다양한 외부 리소스에 쉽게 연결될 수 있도록,
                &nbsp;
                <br className="inline max-[585px]:hidden min-[1024px]:hidden min-[1180px]:inline" />
                내부 또는 외부 브라우저에서 URL을 열 수있도록 제어합니다.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-content nacho-sm:gap-[48px] lg:flex-row lg:items-start">
            <CodeSwitcher tabs={useDeviceSnippets} />
            <div className="flex w-full flex-col items-start justify-start gap-4 p-[24px]">
              <h3 className="break-keep text-sm-text1 !font-semibold text-gray-9 max-[1024px]:w-full max-[1024px]:text-center nacho-sm:text-text1">
                사용자 디바이스 / 앱 정보
              </h3>
              <p className="whitespace-pre-line break-keep text-sm-text2 text-gray-7 max-[1024px]:w-full max-[1024px]:text-center nacho-sm:text-text2">
                사용자의 디바이스 OS, 디바이스 모델, 배터리 상태, 네트워크
                상태부터 &nbsp;
                <br className="hidden max-[1024px]:inline max-[730px]:hidden" />
                앱 실행 환경과 앱 정보까지 다양한 정보를 받아올 수 있습니다.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-content nacho-sm:gap-[48px] lg:flex-row lg:items-start xl:flex-row xl:items-start">
            <CodeSwitcher tabs={dataSnippets} />
            <div className="flex w-full flex-col items-start justify-start gap-4 p-[24px]">
              <h3 className="break-keep text-sm-text1 !font-semibold text-gray-9 max-[1024px]:w-full max-[1024px]:text-center nacho-sm:text-text1">
                앱 내부 저장소 저장
              </h3>
              <p className="whitespace-pre-line break-keep text-sm-text2 text-gray-7 max-[1024px]:w-full max-[1024px]:text-center nacho-sm:text-text2">
                앱 내부 저장소에 특정 키로 데이터를 저장하거나, &nbsp;
                <br className="hidden max-[1024px]:inline max-[560px]:hidden" />
                저장되어있는 데이터를 불러올 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BottomBanner = () => {
  return (
    <div className="relative inset-0 flex w-full items-center justify-center px-sm-default py-[80px] nacho-sm:px-default nacho-sm:py-[136px]">
      <img
        src="/img/developer/bottom-banner-background-image.png"
        alt="Nacho Wave Graph Image"
        width={3840}
        height={840}
        className="absolute inset-0 z-0 object-cover size-full"
      />
      <div className="z-10 flex w-full max-w-[1100px] flex-col items-start justify-center gap-[36px]">
        <h3
          className={`max-nacho-md:w-full max-nacho-md:text-center break-keep font-bold text-gray-9 ${styles.title}`}
        >
          앱, 지금 즉시 만들어보고 결정하세요
        </h3>
        <div
          className={`flex gap-4 max-nacho-md:w-full max-nacho-md:justify-center ${styles.buttons}`}
        >
          <Link className="button button--primary button--lg" to="/docs/intro">
            nachocode 시작하기
            <span className="max-[480px]:hidden"> - 5min</span> ⏱️
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Home(): JSX.Element {
  return (
    <Layout
      title="가장 쉬운 네이티브 웹뷰 앱 개발"
      description="nachocode는 웹 개발자가 JavaScript만으로 고도화된 모바일 네이티브 앱을 개발할 수 있도록 돕는 로우코드 앱 빌드 플랫폼입니다."
    >
      <main>
        <AdvancedAppFeaturesSection />
        <DeveloperSdkSupportSection />
        <NativeAppFeaturesSection />
        <EnhancedUserExperienceSection />
        <AppResourceIntegrationSection />
        <BottomBanner />
      </main>
    </Layout>
  );
}
