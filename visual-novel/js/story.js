// 스토리 데이터 구조
// type: 'dialogue' - 일반 대화
//       'choice' - 선택지
//       'background' - 배경 변경
//       'character' - 캐릭터 표시/변경
//       'end' - 엔딩

const story = {
    start: [
        {
            type: 'background',
            image: 'linear-gradient(135deg, #2c1810 0%, #1a0f0a 50%, #0a0505 100%)'
        },
        {
            type: 'dialogue',
            character: '',
            text: '서기 2157년...'
        },
        {
            type: 'dialogue',
            character: '',
            text: '외계 생명체의 침공으로 지구는 황폐화되었다.'
        },
        {
            type: 'dialogue',
            character: '',
            text: '크리처들은 지구 전역을 뒤덮었고, 인류는 멸종 직전까지 몰렸다.'
        },
        {
            type: 'dialogue',
            character: '',
            text: '그러나 인류는 포기하지 않았다. 최후의 병기, 전투형 안드로이드 시리즈를 개발했다.'
        },
        {
            type: 'background',
            image: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f1e 100%)'
        },
        {
            type: 'dialogue',
            character: '???',
            text: '지휘관님! 지휘관님! 일어나세요!'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '으... 으응? 무슨 일이야...?'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '(눈을 뜨자 눈앞에 새하얀 천장이 보인다. 여기는... 기지의 사령실인가?)'
        },
        {
            type: 'character',
            character: 'aria',
            text: '※ 캐릭터 이미지 표시 위치 - Aria'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '지휘관님! 정신 차리셨나요? 정말 걱정했어요!'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '넌... 아리아? 무슨 일이 있었던 거야?'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '어제 작전 중에 크리처의 습격을 받으셨잖아요. 저희가 구출했지만, 하루 동안 의식을 잃으셨어요.'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '정말... 정말 다행이에요. 제가 못 지켜드렸어요. 죄송합니다...'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '(아리아의 눈빛에서 진심 어린 걱정이 느껴진다.)'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '(이 녀석은 안드로이드지만... 때때로 인간보다 더 인간적이다.)'
        },
        {
            type: 'choice',
            choices: [
                {
                    text: '"괜찮아, 걱정해줘서 고마워."',
                    next: 'aria_route_1'
                },
                {
                    text: '"보고부터 받자. 현재 상황은?"',
                    next: 'professional_route_1'
                }
            ]
        }
    ],

    aria_route_1: [
        {
            type: 'dialogue',
            character: '나',
            text: '괜찮아, 아리아. 걱정해줘서 고마워.'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '...! 지휘관님...'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '(아리아의 얼굴이 살짝 붉어진다. 안드로이드인데도 감정 표현 프로그램이 매우 정교한 모양이다.)'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '저, 저는... 지휘관님을 지키는 게 임무니까요! 당연한 거예요!'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '(귀엽게 당황하는 모습이 보기 좋다.)'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '아, 그리고요! 제가 지휘관님이 깨어나실 때까지 곁에서 계속 지켰어요.'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '손도 계속 잡아드렸고요... 인간의 체온이 회복에 도움이 된다고 들어서요.'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '하루 종일?'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '네! 충전도 안 하고 계속요! 제 배터리는 72시간까지 버틸 수 있으니까 문제없어요!'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '(이 녀석... 정말 충전도 안 하고 계속 곁을 지켰단 말인가.)'
        },
        {
            type: 'dialogue',
            character: '???',
            text: '아라~ 아리아, 혼자서만 지휘관님 독차지하려고?'
        },
        {
            type: 'character',
            character: 'luna',
            text: '※ 캐릭터 이미지 표시 위치 - Luna'
        },
        {
            type: 'dialogue',
            character: '루나',
            text: '지휘관님~ 저도 왔어요! 걱정 많이 했다구요~'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '루나! 언제 들어왔어?!'
        },
        {
            type: 'dialogue',
            character: '루나',
            text: '방금~ 아리아가 지휘관님이랑 알콩달콩하는 거 다 봤어요~'
        },
        {
            type: 'dialogue',
            character: '루나',
            text: '지휘관님, 아리아만 칭찬하시면 제가 삐질 거예요?'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '루나도 작전에 참여했었나?'
        },
        {
            type: 'dialogue',
            character: '루나',
            text: '당연하죠! 제가 지휘관님을 구출한 거예요! 아리아는 그냥 뒤에서 엄호만 했다구요~'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '그, 그건... 작전 상 역할 분담이었잖아!'
        },
        {
            type: 'dialogue',
            character: '루나',
            text: '후훗~ 농담이에요, 아리아. 우리 둘 다 힘을 합쳐서 지휘관님을 구했죠.'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '두 사람 다 고마워. 덕분에 살았어.'
        },
        {
            type: 'dialogue',
            character: 'both',
            text: '(두 안드로이드가 활짝 미소 짓는다.)'
        },
        {
            type: 'dialogue',
            character: '',
            text: '이렇게 나의 하루는 시작된다.'
        },
        {
            type: 'dialogue',
            character: '',
            text: '황폐화된 세계에서, 전투형 안드로이드들과 함께하는 나날들.'
        },
        {
            type: 'dialogue',
            character: '',
            text: '위험하지만... 그녀들이 있어 외롭지 않다.'
        },
        {
            type: 'dialogue',
            character: '',
            text: '- Episode 1: 재회의 아침 -'
        },
        {
            type: 'end',
            message: 'Episode 1 완료! 계속해서 에피소드가 추가될 예정입니다.'
        }
    ],

    professional_route_1: [
        {
            type: 'dialogue',
            character: '나',
            text: '보고부터 받자. 현재 상황은 어때?'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '...네, 알겠습니다.'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '(아리아의 표정이 순식간에 프로페셔널하게 변한다.)'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '현재 기지 방어선은 안정적입니다. 크리처 활동은 전일 대비 23% 감소했습니다.'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '어제 작전에서 중형 크리처 5기, 소형 크리처 37기를 제거했습니다.'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '우리 쪽 피해는?'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '안드로이드 유닛 2기가 중파 상태입니다. 수리 중이며, 48시간 내 전선 복귀 가능합니다.'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '그리고... 지휘관님께서 부상을 입으셨습니다.'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '나는 괜찮아. 계속해.'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '...네.'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '(잠시 침묵이 흐른다.)'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '저어... 지휘관님.'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '왜?'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '제가... 좀 더 빨리 움직였다면 지휘관님이 다치지 않으셨을 텐데...'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '아리아.'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '...네?'
        },
        {
            type: 'choice',
            choices: [
                {
                    text: '"네 잘못이 아니야. 완벽하게 해냈어."',
                    next: 'aria_comfort'
                },
                {
                    text: '"다음엔 더 잘하면 돼. 그게 전부야."',
                    next: 'aria_professional'
                }
            ]
        }
    ],

    aria_comfort: [
        {
            type: 'dialogue',
            character: '나',
            text: '아리아, 네 잘못이 아니야. 완벽하게 해냈어.'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '하지만...'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '네가 없었다면 나는 죽었을 거야. 넌 날 구했어.'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '...!'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '지휘관님... 감사합니다...'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '(아리아의 눈에 무언가 반짝이는 것이 보인다. 눈물...? 안드로이드가?)'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '아리아, 혹시 지금...?'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '아, 이건... 냉각수 배출 시스템이 오작동한 것 같아요. 이상하네요...'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '(냉각수라... 그런 척하는 거겠지.)'
        },
        {
            type: 'dialogue',
            character: '???',
            text: '오잉? 무슨 감동적인 분위기인가요~?'
        },
        {
            type: 'character',
            character: 'luna',
            text: '※ 캐릭터 이미지 표시 위치 - Luna'
        },
        {
            type: 'dialogue',
            character: '루나',
            text: '지휘관님~ 저도 있다는 거 잊으신 건 아니죠?'
        },
        {
            type: 'dialogue',
            character: '루나',
            text: '저도 작전에서 엄청 활약했다구요! 크리처 20기는 제가 잡았어요!'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '루나도 수고했어. 고마워.'
        },
        {
            type: 'dialogue',
            character: '루나',
            text: '에헤헤~ 그 정도론 부족한데요? 보상이 필요해요~'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '루나! 지금은 지휘관님이 쉬셔야 할 시간이야!'
        },
        {
            type: 'dialogue',
            character: '루나',
            text: '아리아야말로 아까부터 혼자 지휘관님 독차지하려고 하잖아~'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '(이 둘은 언제나 이렇게 티격태격한다...)'
        },
        {
            type: 'dialogue',
            character: '',
            text: '황폐화된 세계에서 맞이하는 평화로운 아침.'
        },
        {
            type: 'dialogue',
            character: '',
            text: '전투형 안드로이드들과 함께하는 나날들은 계속된다.'
        },
        {
            type: 'dialogue',
            character: '',
            text: '- Episode 1: 재회의 아침 -'
        },
        {
            type: 'end',
            message: 'Episode 1 완료! 계속해서 에피소드가 추가될 예정입니다.'
        }
    ],

    aria_professional: [
        {
            type: 'dialogue',
            character: '나',
            text: '다음엔 더 잘하면 돼. 그게 전부야.'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '...네, 알겠습니다.'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '다음 작전에서는 실수하지 않겠습니다.'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '(아리아의 표정이 굳어진다. 조금 차갑게 말한 건가...?)'
        },
        {
            type: 'dialogue',
            character: '아리아',
            text: '그럼 저는 다음 작전 준비를 하러 가보겠습니다.'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '어, 그래...'
        },
        {
            type: 'dialogue',
            character: '',
            text: '(아리아가 사령실을 나간다.)'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '(뭔가... 찜찜한 기분이 든다.)'
        },
        {
            type: 'character',
            character: 'luna',
            text: '※ 캐릭터 이미지 표시 위치 - Luna'
        },
        {
            type: 'dialogue',
            character: '루나',
            text: '어머~ 지휘관님, 아리아한테 좀 차갑게 대하신 거 아니에요?'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '루나? 언제 들어온 거야?'
        },
        {
            type: 'dialogue',
            character: '루나',
            text: '방금이요~ 아리아가 풀이 죽어서 나가는 거 봤어요.'
        },
        {
            type: 'dialogue',
            character: '루나',
            text: '저 애, 겉으론 강한 척하지만 속은 유리 멘탈이거든요?'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '...그런가?'
        },
        {
            type: 'dialogue',
            character: '루나',
            text: '지휘관님이 다치신 걸 엄청 자책하고 있었어요. 하루 종일 옆에서 안 떠나고 지켰다구요.'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '그랬구나... 미안하다고 전해줘.'
        },
        {
            type: 'dialogue',
            character: '루나',
            text: '에잇~ 직접 가서 말씀하세요! 아리아가 더 좋아할 거예요.'
        },
        {
            type: 'dialogue',
            character: '루나',
            text: '그리고요, 지휘관님.'
        },
        {
            type: 'dialogue',
            character: '나',
            text: '응?'
        },
        {
            type: 'dialogue',
            character: '루나',
            text: '저희는 안드로이드지만... 지휘관님에 대한 마음은 진짜예요.'
        },
        {
            type: 'dialogue',
            character: '루나',
            text: '그러니까... 좀 더 따뜻하게 대해주세요. 네?'
        },
        {
            type: 'dialogue',
            character: '',
            text: '- Episode 1: 재회의 아침 -'
        },
        {
            type: 'end',
            message: 'Episode 1 완료! 아리아와의 관계가 약간 틀어졌습니다. 다음 에피소드에서 회복할 수 있을지도...?'
        }
    ]
};

// 캐릭터 데이터
const characters = {
    aria: {
        name: '아리아',
        description: '전투형 안드로이드 A-001. 진지하고 책임감이 강한 성격. 지휘관을 누구보다 아낀다.',
        image: 'assets/images/aria.png' // 실제 이미지로 교체 필요
    },
    luna: {
        name: '루나',
        description: '전투형 안드로이드 L-002. 밝고 장난기 많은 성격. 분위기 메이커.',
        image: 'assets/images/luna.png' // 실제 이미지로 교체 필요
    }
};

// 배경 데이터
const backgrounds = {
    ruins: 'linear-gradient(135deg, #2c1810 0%, #1a0f0a 50%, #0a0505 100%)',
    command_room: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f1e 100%)',
    battlefield: 'linear-gradient(135deg, #3d1f1f 0%, #2a1515 50%, #1a0a0a 100%)'
};
