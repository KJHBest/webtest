// 비주얼 노벨 엔진
class VisualNovelEngine {
    constructor() {
        this.currentScene = 'start';
        this.currentIndex = 0;
        this.dialogueLog = [];
        this.isAutoMode = false;
        this.isSkipMode = false;
        this.autoTimeout = null;
        this.textSpeed = 30; // 텍스트 표시 속도 (ms)

        this.initElements();
        this.initEventListeners();
        this.showTitleScreen();
    }

    initElements() {
        // DOM 요소들
        this.background = document.getElementById('background');
        this.characterSprite = document.getElementById('character-sprite');
        this.dialogueBox = document.getElementById('dialogue-box');
        this.characterName = document.getElementById('character-name');
        this.dialogueText = document.getElementById('dialogue-text');
        this.choicesContainer = document.getElementById('choices-container');
        this.titleScreen = document.getElementById('title-screen');
        this.menuPanel = document.getElementById('menu-panel');
        this.saveLoadScreen = document.getElementById('save-load-screen');
        this.logScreen = document.getElementById('log-screen');
        this.continueIndicator = document.getElementById('continue-indicator');
    }

    initEventListeners() {
        // 타이틀 화면 버튼
        document.getElementById('start-btn').addEventListener('click', () => this.startGame());
        document.getElementById('continue-btn').addEventListener('click', () => this.showLoadScreen());
        document.getElementById('gallery-btn').addEventListener('click', () => this.showGallery());

        // 메뉴 버튼
        document.getElementById('menu-btn').addEventListener('click', () => this.toggleMenu());
        document.getElementById('save-btn').addEventListener('click', () => this.showSaveScreen());
        document.getElementById('load-btn').addEventListener('click', () => this.showLoadScreen());
        document.getElementById('auto-btn').addEventListener('click', () => this.toggleAutoMode());
        document.getElementById('skip-btn').addEventListener('click', () => this.toggleSkipMode());
        document.getElementById('log-btn').addEventListener('click', () => this.showLog());
        document.getElementById('close-menu-btn').addEventListener('click', () => this.toggleMenu());

        // 화면 닫기 버튼
        document.getElementById('close-save-load').addEventListener('click', () => this.closeSaveLoadScreen());
        document.getElementById('close-log').addEventListener('click', () => this.closeLog());

        // 대화 진행 (클릭)
        this.dialogueBox.addEventListener('click', () => this.nextDialogue());

        // 키보드 입력
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.nextDialogue();
            } else if (e.key === 'Escape') {
                this.toggleMenu();
            }
        });
    }

    showTitleScreen() {
        this.titleScreen.style.display = 'flex';
        this.dialogueBox.style.display = 'none';
    }

    hideTitleScreen() {
        this.titleScreen.style.display = 'none';
        this.dialogueBox.style.display = 'block';
    }

    startGame() {
        this.hideTitleScreen();
        this.currentScene = 'start';
        this.currentIndex = 0;
        this.dialogueLog = [];
        this.loadScene();
    }

    loadScene() {
        const sceneData = story[this.currentScene];
        if (!sceneData) {
            console.error('Scene not found:', this.currentScene);
            return;
        }
        this.processEvent(sceneData[this.currentIndex]);
    }

    processEvent(event) {
        if (!event) {
            console.log('No more events in this scene');
            return;
        }

        switch (event.type) {
            case 'dialogue':
                this.showDialogue(event);
                break;
            case 'choice':
                this.showChoices(event);
                break;
            case 'background':
                this.changeBackground(event);
                this.currentIndex++;
                this.loadScene();
                break;
            case 'character':
                this.showCharacter(event);
                this.currentIndex++;
                this.loadScene();
                break;
            case 'end':
                this.showEnding(event);
                break;
        }
    }

    showDialogue(event) {
        this.choicesContainer.innerHTML = '';
        this.characterName.textContent = event.character || '';

        // 대화 로그에 추가
        if (event.character && event.text) {
            this.dialogueLog.push({
                character: event.character,
                text: event.text
            });
        }

        // 텍스트 애니메이션
        this.typeWriter(event.text, () => {
            this.continueIndicator.style.display = 'block';

            // 자동 모드일 경우 자동으로 다음 대사로
            if (this.isAutoMode) {
                this.autoTimeout = setTimeout(() => {
                    this.nextDialogue();
                }, 2000);
            }
        });
    }

    typeWriter(text, callback) {
        this.continueIndicator.style.display = 'none';
        this.dialogueText.textContent = '';

        // 스킵 모드일 경우 바로 표시
        if (this.isSkipMode) {
            this.dialogueText.textContent = text;
            if (callback) callback();
            return;
        }

        let i = 0;
        const type = () => {
            if (i < text.length) {
                this.dialogueText.textContent += text.charAt(i);
                i++;
                setTimeout(type, this.textSpeed);
            } else {
                if (callback) callback();
            }
        };
        type();
    }

    nextDialogue() {
        // 자동 모드 타이머 취소
        if (this.autoTimeout) {
            clearTimeout(this.autoTimeout);
            this.autoTimeout = null;
        }

        this.currentIndex++;
        this.loadScene();
    }

    showChoices(event) {
        this.continueIndicator.style.display = 'none';
        this.choicesContainer.innerHTML = '';
        this.dialogueText.textContent = '선택하세요...';
        this.characterName.textContent = '';

        event.choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice-button';
            button.textContent = choice.text;
            button.addEventListener('click', () => this.selectChoice(choice.next));

            // 애니메이션 딜레이
            setTimeout(() => {
                this.choicesContainer.appendChild(button);
            }, index * 100);
        });
    }

    selectChoice(nextScene) {
        this.currentScene = nextScene;
        this.currentIndex = 0;
        this.choicesContainer.innerHTML = '';
        this.loadScene();
    }

    changeBackground(event) {
        if (event.image.startsWith('linear-gradient') || event.image.startsWith('radial-gradient')) {
            this.background.style.background = event.image;
            this.background.style.backgroundImage = 'none';
        } else {
            this.background.style.backgroundImage = `url(${event.image})`;
        }
    }

    showCharacter(event) {
        const char = characters[event.character];
        if (char) {
            this.characterSprite.src = char.image;
            this.characterSprite.style.display = 'block';
            this.characterSprite.style.opacity = '0';

            setTimeout(() => {
                this.characterSprite.style.opacity = '1';
            }, 100);
        } else {
            this.characterSprite.style.display = 'none';
        }
    }

    showEnding(event) {
        this.dialogueText.textContent = event.message;
        this.characterName.textContent = '';
        this.continueIndicator.style.display = 'none';

        setTimeout(() => {
            if (confirm('타이틀 화면으로 돌아가시겠습니까?')) {
                this.showTitleScreen();
            }
        }, 2000);
    }

    // 메뉴 관련
    toggleMenu() {
        const isVisible = this.menuPanel.style.display === 'block';
        this.menuPanel.style.display = isVisible ? 'none' : 'block';
    }

    toggleAutoMode() {
        this.isAutoMode = !this.isAutoMode;
        const btn = document.getElementById('auto-btn');
        btn.textContent = this.isAutoMode ? '자동 (ON)' : '자동';
        btn.style.background = this.isAutoMode ? 'rgba(100, 200, 255, 0.3)' : 'transparent';

        if (this.isAutoMode && this.continueIndicator.style.display === 'block') {
            this.autoTimeout = setTimeout(() => {
                this.nextDialogue();
            }, 2000);
        }
    }

    toggleSkipMode() {
        this.isSkipMode = !this.isSkipMode;
        const btn = document.getElementById('skip-btn');
        btn.textContent = this.isSkipMode ? '스킵 (ON)' : '스킵';
        btn.style.background = this.isSkipMode ? 'rgba(100, 200, 255, 0.3)' : 'transparent';
    }

    // 세이브/로드
    showSaveScreen() {
        this.toggleMenu();
        this.saveLoadScreen.style.display = 'flex';
        document.getElementById('save-load-title').textContent = '저장하기';
        this.renderSaveSlots('save');
    }

    showLoadScreen() {
        if (this.titleScreen.style.display === 'flex') {
            this.titleScreen.style.display = 'none';
        } else {
            this.toggleMenu();
        }
        this.saveLoadScreen.style.display = 'flex';
        document.getElementById('save-load-title').textContent = '불러오기';
        this.renderSaveSlots('load');
    }

    renderSaveSlots(mode) {
        const slotsContainer = document.getElementById('save-slots');
        slotsContainer.innerHTML = '';

        for (let i = 1; i <= 6; i++) {
            const saveData = this.loadFromSlot(i);
            const slot = document.createElement('div');
            slot.className = 'save-slot';

            const title = document.createElement('div');
            title.className = 'save-slot-title';
            title.textContent = `슬롯 ${i}`;

            const info = document.createElement('div');
            info.className = 'save-slot-info';

            if (saveData) {
                info.textContent = `${saveData.scene}\n${saveData.timestamp}`;
            } else {
                info.textContent = '비어있음';
            }

            slot.appendChild(title);
            slot.appendChild(info);

            slot.addEventListener('click', () => {
                if (mode === 'save') {
                    this.saveToSlot(i);
                } else {
                    this.loadFromSlotAndStart(i);
                }
            });

            slotsContainer.appendChild(slot);
        }
    }

    saveToSlot(slotNumber) {
        const saveData = {
            scene: this.currentScene,
            index: this.currentIndex,
            timestamp: new Date().toLocaleString('ko-KR'),
            log: this.dialogueLog
        };

        localStorage.setItem(`vn_save_${slotNumber}`, JSON.stringify(saveData));
        alert(`슬롯 ${slotNumber}에 저장되었습니다.`);
        this.closeSaveLoadScreen();
    }

    loadFromSlot(slotNumber) {
        const data = localStorage.getItem(`vn_save_${slotNumber}`);
        return data ? JSON.parse(data) : null;
    }

    loadFromSlotAndStart(slotNumber) {
        const saveData = this.loadFromSlot(slotNumber);
        if (saveData) {
            this.currentScene = saveData.scene;
            this.currentIndex = saveData.index;
            this.dialogueLog = saveData.log || [];
            this.closeSaveLoadScreen();
            this.hideTitleScreen();
            this.loadScene();
        } else {
            alert('저장된 데이터가 없습니다.');
        }
    }

    closeSaveLoadScreen() {
        this.saveLoadScreen.style.display = 'none';
    }

    // 로그
    showLog() {
        this.toggleMenu();
        this.logScreen.style.display = 'flex';
        const logContainer = document.getElementById('log-container');
        logContainer.innerHTML = '';

        this.dialogueLog.forEach(entry => {
            const logEntry = document.createElement('div');
            logEntry.className = 'log-entry';

            const name = document.createElement('div');
            name.className = 'log-entry-name';
            name.textContent = entry.character;

            const text = document.createElement('div');
            text.className = 'log-entry-text';
            text.textContent = entry.text;

            logEntry.appendChild(name);
            logEntry.appendChild(text);
            logContainer.appendChild(logEntry);
        });

        // 스크롤을 맨 아래로
        logContainer.scrollTop = logContainer.scrollHeight;
    }

    closeLog() {
        this.logScreen.style.display = 'none';
    }

    showGallery() {
        alert('갤러리 기능은 추후 업데이트 예정입니다!');
    }
}

// 게임 시작
let game;
window.addEventListener('DOMContentLoaded', () => {
    game = new VisualNovelEngine();
});
