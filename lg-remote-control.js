var LitElement = LitElement || Object.getPrototypeOf(customElements.get("home-assistant-main"));
var html = html || LitElement.prototype.html;
var css = css || LitElement.prototype.css;

class TestLgRemoteControl extends LitElement {

    static disneyIcon = html`<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="21.000000pt" height="21.000000pt" viewBox="0 0 122.000000 125.000000"
                  preserveAspectRatio="xMidYMid meet">
                 <metadata>
                 Created by potrace 1.15, written by Peter Selinger 2001-2017
                 </metadata>
                 <g transform="translate(0.000000,125.000000) scale(0.100000,-0.100000)"
                 fill="var(--primary-text-color)" stroke="none">
                 <path d="M841 1181 c-14 -9 -12 -53 4 -107 6 -18 -1 -24 -50 -44 -50 -20 -56
                 -26 -53 -49 4 -33 34 -39 89 -17 22 9 41 16 43 16 3 0 12 -23 21 -50 19 -58
                 43 -76 71 -56 17 13 17 19 7 58 -6 23 -14 50 -18 59 -4 12 6 20 42 33 70 25
                 78 31 78 57 0 31 -38 37 -102 15 -26 -9 -47 -16 -48 -16 -1 0 -8 19 -14 43
                 -20 64 -37 79 -70 58z"/>
                 <path d="M293 805 c-113 -31 -173 -77 -173 -132 0 -34 8 -38 45 -23 19 7 19 8
                 -5 18 l-25 9 33 20 c61 37 171 56 295 50 127 -6 203 -23 297 -69 115 -56 200
                 -165 200 -257 0 -39 -38 -107 -76 -136 -75 -57 -200 -99 -221 -73 -6 7 -22 49
                 -36 93 -14 44 -28 88 -32 97 -9 23 55 40 133 36 l57 -3 -3 -32 c-4 -40 18 -45
                 42 -11 24 33 20 71 -10 99 -22 20 -35 24 -92 24 -37 0 -86 -4 -109 -8 l-43 -9
                 -23 54 c-13 29 -34 62 -46 72 -21 19 -21 19 -21 -11 0 -16 5 -56 12 -88 l11
                 -58 -29 -20 c-68 -48 -114 -104 -114 -136 0 -51 71 -106 188 -147 39 -13 58
                 -27 72 -51 11 -18 24 -33 29 -33 24 0 41 14 41 35 0 20 7 24 59 33 173 31 293
                 163 278 308 -13 129 -112 232 -290 304 -146 58 -326 76 -444 45z m259 -502
                 l25 -88 -33 -3 c-37 -3 -140 43 -158 70 -8 13 -6 22 9 38 20 23 101 69 121 70
                 6 0 22 -39 36 -87z"/>
                 </g>
                 </svg>`;
    static daznIcon = html`<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="22.000000pt" height="20.000000pt" viewBox="0 0 324.000000 323.000000"
                    preserveAspectRatio="xMidYMid meet">
                  <metadata>
                  Created by potrace 1.15, written by Peter Selinger 2001-2017
                  </metadata>
                  <g transform="translate(0.000000,323.000000) scale(0.09000,-0.090000)"
                  fill="var(--primary-text-color)"  stroke="none">
                  <path d="M197 3033 c-4 -3 -7 -286 -7 -627 l0 -621 87 -87 87 -88 -87 -88 -87
                  -89 0 -627 0 -626 1430 0 1430 0 0 627 0 628 -87 88 -88 88 88 86 87 86 0 628
                  0 629 -1423 0 c-783 0 -1427 -3 -1430 -7z m2713 -663 l0 -531 -115 -117 -115
                  -117 115 -115 115 -115 0 -528 0 -527 -1290 0 -1290 0 0 527 0 528 117 117
                  118 118 -118 118 -117 117 0 521 c0 286 3 524 7 527 3 4 584 7 1290 7 l1283 0
                  0 -530z"/>
                  <path d="M800 2175 l0 -395 238 0 237 0 87 88 87 87 1 219 1 219 -88 89 -88
                  88 -237 0 -238 0 0 -395z m462 208 l48 -47 0 -160 0 -160 -47 -48 -47 -48
                  -138 0 -138 0 0 248 c0 137 3 252 7 255 3 4 65 7 137 7 l130 0 48 -47z"/>
                  <path d="M2052 2553 c-10 -18 -68 -157 -214 -508 -43 -104 -85 -205 -93 -223
                  -8 -18 -15 -35 -15 -37 0 -3 34 -5 75 -5 l74 0 22 50 21 50 198 0 197 0 21
                  -50 21 -50 77 0 c57 0 75 3 71 13 -3 6 -21 48 -40 92 -31 73 -69 164 -230 550
                  l-54 130 -61 3 c-50 2 -62 0 -70 -15z m141 -375 l65 -158 -139 0 -139 0 20 48
                  c11 26 41 100 67 164 26 64 51 114 55 110 3 -4 35 -78 71 -164z"/>
                  <path d="M806 1433 c-3 -3 -6 -37 -6 -74 l0 -68 205 2 c113 1 205 1 205 -1 0
                  -2 -37 -49 -82 -104 -46 -55 -94 -115 -108 -132 -13 -17 -68 -84 -122 -148
                  l-98 -118 0 -70 0 -70 300 0 300 0 0 70 0 70 -205 0 c-113 0 -205 2 -205 5 0
                  3 9 15 19 27 11 13 103 124 205 248 l186 225 -3 70 -2 70 -291 2 c-160 1 -294
                  -1 -298 -4z"/>
                  <path d="M1795 1432 c-3 -3 -5 -180 -5 -394 l0 -388 70 0 70 0 2 252 3 251
                  175 -251 175 -251 78 -1 77 0 0 394 0 395 -67 -2 -68 -2 -5 -276 -5 -276 -195
                  279 -195 279 -52 -2 c-29 -1 -55 -5 -58 -7z"/>
                  </g>
                  </svg>`;
    static iconMapping = {
        "disney": TestLgRemoteControl.disneyIcon,
        "dazn": TestLgRemoteControl.daznIcon
    };

    static get properties() {
        return {
            hass: {},
            config: {},
            _show_inputs: {},
            _show_sound_output: {}
        };
    }

    constructor() {
        super();
        this._show_inputs = false;
        this._show_sound_output = false;
    }

    render() {
        const stateObj = this.hass.states[this.config.entity];
        const scale = this.config.scale ? this.config.scale : 1;
        return html`
            <div class="card" style="transform: scale(${scale})">
            <div class="page">
                  <div class="grid-container-power">

                    <div class="grid-item">
                      <button class="btn-flat ripple" @click=${() => this._channelList()}><ha-icon icon="mdi:format-list-numbered"/></button>
                    </div>
                    <div class="grid-item">
                      <button class="btn ripple" @click=${() => this._media_player_service("toggle")}><ha-icon icon="mdi:power" style="color: red;"/></button>
                    </div>
                    <div class="grid-item">
                      <button class="btn-flat ripple" @click=${() => this._123()}>123</button>
                    </div>
                  </div>


                 ${this._show_inputs ? html`
<!-- ################################# SOURCES ################################# -->
                  <div class="grid-container-input">
                    <div class="shape-input">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path d="m 40 5 a 10 10 0 0 1 10 10 a 15 15 0 0 0 15 15 h 5 a 10 10 0 0 1 10 10 h -80 v -25 a 10 10 0 0 1 10 -10 z m 0 0" fill="var(--deactive-background-button-color)" stroke="#000000" stroke-width="0" /></svg>
                    </div>
                    <div class="shape-input-background">
                    </div>
                    <div class="grid-item go_back_right">
                      <button class="btn ripple" @click=${() => this._show_inputs = false}>back</button>
                    </div>
                    <div class="source_text">
                      <p><b>SOURCE</b></p>
                    </div>
                    <div class="grid-item-hdmi-sound">
                    ${stateObj.attributes.source_list.map(source => html`
                    <button class="btn_hdmi-sound  ripple overlay" @click=${() => {
            this._select_source(source);
            this._show_inputs = false;
        }}}>${source}</button>
                    `)}
                    </div>
                  </div>
<!-- ################################# SOURCES END ################################# -->
                 ` : html`

                 ${this._show_sound_output ? html`
<!-- ################################# SOUND ################################# -->
                  <div class="grid-container-sound">
                    <div class="shape-sound">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path d="m 40 5 h 30 a 10 10 0 0 1 10 10 v 25 h -80 a 10 10 0 0 1 10 -10 h 5 a 15 15 0 0 0 15 -15 a 10 10 0 0 1 10 -10" fill="var(--deactive-background-button-color)" stroke="#000000" stroke-width="0" /></svg>
                    </div>
                    <div class="grid-item go_back_left">
                      <button class="btn ripple" @click=${() => this._show_sound_output = false}>back</button>
                    </div>
                    <div class="sound_text">
                      <p><b>SOUND</b></p>
                    </div>
                  </div>
                  <div class="grid-container-sound-button">
                    <div class="grid-item tv_speaker">
                        <button class="btn_sound  ripple overlay" style="width: 240px;" @click=${() => this._select_sound_output("tv_speaker")}>TV SPEAKER</button>
                    </div>
                    <div class="grid-item int+optic">
                      <button class="btn_sound  ripple overlay" @click=${() => this._select_sound_output("tv_external_speaker")}>int+optic</button>
                      </div>
                    <div class="grid-item int+jack">
                      <button class="btn_sound  ripple overlay" @click=${() => this._select_sound_output("tv_speaker_headphone")}>int+jack</button>
                      </div>
                    <div class="grid-item optical">
                      <button class="btn_sound  ripple overlay" @click=${() => this._select_sound_output("external_optical")}>optical</button>
                      </div>
                    <div class="grid-item arc">
                      <button class="btn_sound  ripple overlay" @click=${() => this._select_sound_output("external_arc")}>arc</button>
                      </div>
                    <div class="grid-item line">
                      <button class="btn_sound  ripple overlay" @click=${() => this._select_sound_output("lineout")}>lineout</button>
                      </div>
                    <div class="grid-item headphone">
                      <button class="btn_sound  ripple overlay" @click=${() => this._select_sound_output("headphone")}>headphone</button>
                    </div>
<!--
                    <div class="grid-item bluetooth">
                      <button class="btn_sound  ripple overlay" @click=${() => this._select_sound_output("bt_soundbar")}>bluetooth</button>
                    </div>
-->
                  </div>
                  </div>
<!-- ################################# SOUND END ################################# -->
                 ` : html`
<!-- ################################# DIRECTION PAD ################################# -->
                  <div class="grid-container">
                    <div class="shape">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path d="m 30 15 a 10 10 0 0 1 20 0 a 15 15 0 0 0 15 15 a 10 10 0 0 1 0 20 a 15 15 0 0 0 -15 15 a 10 10 0 0 1 -20 0 a 15 15 0 0 0 -15 -15 a 10 10 0 0 1 0 -20 a 15 15 0 0 0 15 -15" fill="var(--deactive-background-button-color)" stroke="#000000" stroke-width="0" /></svg>
                    </div>
                    <div class="grid-item smart" >
                      <button class="btn ripple" @click=${() => this._show_sound_output = true}>SMART</button>
                    </div>
                    <div class="grid-item up" style="margin-bottom: 9px;">
                      <button class="btn ripple" @click=${() => this._button("UP")}><ha-icon icon="mdi:menu-up"/></button>
                    </div>
                    <div class="grid-item input">
                      <button class="btn ripple" @click=${() => this._show_inputs = true}>INPUT</button>
                    </div>
                    <div class="grid-item left" style="margin-right: 4px;">
                      <button class="btn ripple" @click=${() => this._button("LEFT")}><ha-icon icon="mdi:menu-left"/></button>
                    </div>
                    <div class="grid-item ok" style="padding: 0px;">
                      <button class="btn bnt_ok ripple"  @click=${() => this._button("ENTER")}>OK</button>
                    </div>
                    <div class="grid-item right" style="margin-left: 4px;">
                      <button class="btn ripple" @click=${() => this._button("RIGHT")}><ha-icon icon="mdi:menu-right"/></button>
                    </div>
                    <div class="grid-item back">
                      <button class="btn ripple" @click=${() => this._button("BACK")}>BACK</button>
                    </div>
                    <div class="grid-item down" style="margin-top: 9px;">
                      <button class="btn ripple" @click=${() => this._button("DOWN")}><ha-icon icon="mdi:menu-down"/></button>
                    </div>
                    <div class="grid-item exit">
                      <button class="btn ripple" @click=${() => this._button("EXIT")}>EXIT</button>
                    </div>

                  </div>
<!-- ################################# DIRECTION PAD END ################################# -->
                  `}

<!-- ################################# SOURCE BUTTONS ################################# -->
                  ${this.config.sources ? html`
                    <div class="grid-container-source">
                    ${this.config.sources.map(source => {
            return html`
                      <div class="grid-item">
                        <button class="btn_source ripple" @click=${() => this._select_source(source.name)}>
                          ${TestLgRemoteControl.getIcon(source.icon)}
                        </button>
                      </div>
                      `;
        })}
                    </div>
                    ` : html`
                  <div class="grid-container-source">
                    <div class="grid-item netflix">
                      <button class="btn_source ripple" @click=${() => this._select_source("Netflix")}><ha-icon icon="mdi:netflix"/></button>
                    </div>
                    <div class="grid-item amazon">
                      <button class="btn_source ripple" @click=${() => this._select_source("Amazon Prime Video")}><ha-icon icon="mdi:amazon"/></button>
                    </div>
                    <div class="grid-item disney">
                      <button class="btn_source ripple" @click=${() => this._select_source("Disney+")}>${TestLgRemoteControl.disneyIcon}</button>
                    </div>
                    <div class="grid-item dazn">
                      <button class="btn_source ripple" @click=${() => this._select_source("DAZN")}>${TestLgRemoteControl.daznIcon}</button>
                    </div>
                  </div>`}
<!-- ################################# SOURCE BUTTONS END ################################# -->

                  <div class="grid-container-bottom">
                    <div class="grid-item">
                      <button class="btn ripple"  style="border-radius: 50% 50% 0px 0px;" @click=${() => this._media_player_service("volume_up")}><ha-icon icon="mdi:plus"/></button>
                    </div>
                    <div class="grid-item" style="margin-top: 0px;">
                      <button class="btn-flat ripple" @click=${() => this._button("HOME")}>MENU</button>
                    </div>
                    <div class="grid-item">
                      <button class="btn ripple" style="border-radius: 50% 50% 0px 0px;" @click=${() => this._button("CHANNELUP")}><ha-icon icon="mdi:menu-up"/></button>
                    </div>

                    <div class="grid-item">
                      <button class="btn" style="border-radius: 0px; cursor: default;"><ha-icon icon="${stateObj.attributes.is_volume_muted === true ? 'mdi:volume-off' : 'mdi:volume-high'}"/></button>
                    </div>
                    <div class="grid-item">
                      <button class="btn ripple" Style="color:${stateObj.attributes.is_volume_muted === true ? 'red' : ''};" @click=${() => this._button("MUTE")}><span class="${stateObj.attributes.is_volume_muted === true ? 'blink' : ''}">MUTO</span></button>
                    </div>
                    <div class="grid-item">
                      <button class="btn" style="border-radius: 0px; cursor: default;">P</button>
                    </div>

                    <div class="grid-item">
                      <button class="btn ripple" style="border-radius: 0px 0px 50% 50%;" @click=${() => this._media_player_service("volume_down")}><ha-icon icon="mdi:minus"/></button>
                    </div>
                    <div class="grid-item" style="margin-bottom: 0px;">
                      <button class="btn-flat ripple" @click=${() => this._button("INFO")}>INFO</button>
                    </div>
                    <div class="grid-item">
                      <button class="btn ripple" style="border-radius: 0px 0px 50% 50%;"  @click=${() => this._button("CHANNELDOWN")}><ha-icon icon="mdi:menu-down"/></button>
                    </div>

                    <div class="grid-item">
                    </div>
                    <div class="grid-item">
                    </div>
                    <div class="grid-item">
                    </div>

<!-- ################################# MEDIA CONTROL ################################# -->
                    <div class="grid-item">
                      <button class="btn-flat ripple"  @click=${() => this._command("media.controls/play")}><ha-icon icon="mdi:play"/></button>
                    </div>
                      <div class="grid-item">
                      <button class="btn-flat ripple"  @click=${() => this._command("media.controls/pause")}><ha-icon icon="mdi:pause"/></button>
                    </div>
                    <div class="grid-item ">
                      <button class="btn-flat ripple"  @click=${() => this._command("media.controls/stop")}><ha-icon icon="mdi:stop"/></button>
                    </div>
                    <div class="grid-item">
                      <button class="btn-flat ripple"  @click=${() => this._command("media.controls/rewind")}><ha-icon icon="mdi:skip-backward"/></button>
                    </div>
                      <div class="grid-item">
                      <button class="btn-flat ripple" style="color: red;" @click=${() => this._command("media.controls/Record")}><ha-icon icon="mdi:record"/></button>
                    </div>
                    <div class="grid-item ">
                      <button class="btn-flat ripple"  @click=${() => this._command("media.controls/fastForward")}><ha-icon icon="mdi:skip-forward"/></button>
                    </div>
<!-- ################################# MEDIA CONTROL END ################################# -->

                  </div>

              `}
              </div>
              </div>
            `;


    }

    updated() {
    }


    _123() {
        this.hass.callService("browser_mod", "popup",
            {
                "card": {
                    "type": "custom:card-numeric-pad",
                    "entity": this.config.entity
                },
                "deviceID": ["this"],
                "title": " ",
                "style": {
                    "border-radius": "15px"
                }
            }
        )
    }

    _channelList() {
        this.hass.callService("browser_mod", "popup",
            {
                "card": {
                    "type": "custom:card-channel-pad",
                    "entity": this.config.entity,
                    "channels": this.config.channels
                },
                "deviceID": [
                    "this"
                ],
                "title": " ",
                "large": true,
                "style": {
                    "border-radius": "15px"
                }
            }
        )
    }

    _button(button) {
        this.hass.callService("webostv", "button", {
            entity_id: this.config.entity,
            button: button
        });
    }

    _command(command) {
        this.hass.callService("webostv", "command", {
            entity_id: this.config.entity,
            command: command
        });
    }

    _media_player_service(service) {
        this.hass.callService("media_player", service, {
            entity_id: this.config.entity,
        });
    }

    _select_source(source) {
        this.hass.callService("media_player", "select_source", {
            entity_id: this.config.entity,
            source: source
        });
    }

    _select_sound_output(sound_output) {
        this.hass.callService("webostv", "select_sound_output", {
            entity_id: this.config.entity,
            sound_output: sound_output
        });
        this._show_sound_output = false;
    }

    _smart() {
        this.hass.callService("webostv", "command", {
            entity_id: this.config.entity,
            command: "tv/getChannelList"
        });
    }

    _smart2() {
        this.hass.callService("webostv", "button", {
            entity_id: this.config.entity,
            button: "TV_CHANNEL_DOWN"
        });
    }

    _input() {
        this.hass.callService("webostv", "button", {
            entity_id: this.config.entity,
            button: "GET_SYSTEM_SETTINGS"
        });
    }

    setConfig(config) {
        if (!config.entity) {
            console.log("Invalid configuration");
        }
        this.config = config;
    }

    getCardSize() {
        return 2;
    }

    static getIcon(iconName) {
        return Object.keys(this.iconMapping).includes(iconName)
            ? this.iconMapping[iconName]
            : html`<ha-icon icon="${iconName}"/>`;
    }

    static get styles() {
        return css`
  button:focus {outline:0;}

  /*Create ripple effec*/
  
  .ripple {
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
  }
  
  .ripple:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #7a7f87 2%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform .5s, opacity 1s;
  }
  
  .ripple:active:after {
    transform: scale(0, 0);
    opacity: .3;
    transition: 0s;
  }
  .blink {
    animation: blinker 1.5s linear infinite;
    color: red;
    }
    @keyframes blinker {  
    50% { opacity: 0; }
    }

  .card {
//      padding: 15px 0px 15px 0px;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .page {
    width:300px;
    height: 100%;
    display: inline-block;
    flex-direction: row;
    border: 1px solid var(--app-header-text-color);
    border-radius: 35px;
    padding-bottom: 20px;
  }

  .grid-container-power {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 86px;
    background-color: transparent;
    padding: 7px 20px 0px 20px;
    overflow: hidden;
  }

  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 86px;
    background-color: transparent;
    padding: 0px 20px 0px 20px;
    overflow: hidden;
  }

  .grid-container-input {
    display: grid;
    grid-template-columns: 33% 34% 33%;
    grid-template-rows: 86px 43px 518px;
    background-color: transparent;
    padding: 0px 20px 0px 20px;
    overflow: hidden;
  }
  .grid-container-sound {
    display: grid;
    grid-template-columns: 33% 34% 33%;
    grid-template-rows: 86px 43px;
    background-color: transparent;
    padding: 0px 20px 0px 20px;
    overflow: hidden;
  }
  .grid-container-sound-button{
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 45px 45px 45px 45px;
    background-color: var(--deactive-background-button-color);
    margin: 0px 20px 0px 20px;
    padding-bottom: 12px;
     overflow: hidden;
    border-radius: 0px 0px 35px 35px;
  }
  .grid-container-source {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: 56px;
    background-color: transparent;
    padding: 7px 20px 0px 20px;
    overflow: hidden;
  }

  .grid-container-bottom{
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 60px 60px 60px 20px 50px 50px;
    background-color: transparent;
    padding: 25px 20px 0px 20px;
    overflow: hidden;
  }

  .grid-item {
    background-color: transparent;
    margin: auto;
    overflow: hidden;
  }

  .grid-item-hdmi-sound{
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
    grid-template-columns: auto auto ;
    grid-template-rows: 60px;
    background-color: transparent;
    margin: auto;
    overflow: scroll;
    height: 509px;
    margin-top: 30px;
    
    
  }
  .grid-item-sound{
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
    background-color: transparent;
    margin: auto;
    overflow: hidden;
    height: 509px;
    margin-top: 30px;
    
  }



  .grid-item-hdmi-sound::-webkit-scrollbar {
    display: none;
  }
  .grid-item-hdmi-sound::-webkit-scrollbar {
    -ms-overflow-style: none;
  }

  .shape {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 4;
    
  }
  .shape-input {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
    
  }
  .shape-sound {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
    
  }
  .shape-input-background {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
    background-color: var(--deactive-background-button-color);
    border-radius: 0px 0px 35px 35px;
    
  }

  .hdmi-container {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 4;
    display: block:
    width: 100%;
    margin: auto;
    
  }

  .source_text {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    text-align: center;
    margin-top: 25px;
    font-size: 30px;

    opacity: 0.3;
  }
  .sound_text {
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
    text-align: center;
    margin-top: 25px;
    font-size: 30px;

    opacity: 0.3;
  }

  .smart {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .up {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .input {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .left {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .ok {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  .right {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .back {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  .down {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
  }
  .exit {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  .go_back_right {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .go_back_left {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .tv_speaker {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .int+optic {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  .int+jack {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  .arc {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
  }
  .optical {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
  }
  .line {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 5;
  }
  .headphone {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
  }

  
  

  .btn {
    background-color: var(--deactive-background-button-color);
    color: var(--primary-text-color);
    font-size: 14px;
    width: 60px;
    height: 60px;
    border-width: 0px;
    border-radius: 50%;
    margin: auto;
    place-items: center;
    display: inline-block;
    cursor: pointer;
    
  }

  .btn_source {
    background-color: var(--deactive-background-button-color);
    color: var(--primary-text-color);
    font-size: 14px;
    width: 42px;
    height: 32px;
    border-width: 0px;
    border-radius: 15px;
    margin: auto;
    place-items: center;
    display: inline-block;
    cursor: pointer;
    
  }
  .btn_hdmi-sound {
    background-color: var(--deactive-background-button-color);
    color: var(--primary-text-color);
    font-size: 14px;
    width: 246px;
    height: 42px;
    border-width: 0px;
    border-radius: 15px;
    margin: auto;
    place-items: center;
    display: block;
    cursor: pointer;
    border: solid 2px var(--primary-background-color);
    
  }

  .btn_sound {
    background-color: var(--deactive-background-button-color);
    color: var(--primary-text-color);
    font-size: 14px;
    width: 110px;
    height: 32px;
    border-width: 0px;
    border-radius: 15px;
    margin: auto;
    display: block;
    cursor: pointer;
    border: solid 2px var(--primary-background-color);
    
  }

  .overlay {
    background-color: rgba(0,0,0,0.1)
  }

  .btn-flat {
    background-color: var(--deactive-background-button-color); //rgba(255, 0, 0, 1);
    color: var(--primary-text-color);
    font-size: 14px;
    width: 60px;
    height: 32px;
    border-width: 0px;
    border-radius: 15px;
    margin: auto;
    display :grid;
    place-items: center;
    display: inline-block;
    cursor: pointer;
    
  }

  .bnt_ok {
    width: 80px;
    height:80px;
    font-size: 18px;
    border: solid 2px var(--primary-background-color);

  }
  `;
    }

}

customElements.define('test-lg-remote-control', TestLgRemoteControl);
