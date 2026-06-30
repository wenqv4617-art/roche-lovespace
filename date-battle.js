(function() {
  const STYLE_ID = "roche-plugin-date-battle-styles";

  // 1. 扁平极简浅色主题样式（顶栏压缩至 48px）
  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .roche-plugin-date-battle {
        --db-primary: #db2777;
        --db-primary-hover: #be185d;
        --db-primary-light: #fdf2f8;
        --db-bg: #f9fafb;
        --db-surface: #ffffff;
        --db-surface-hover: #f3f4f6;
        --db-text: #1f2937;
        --db-text-muted: #6b7280;
        --db-border: #e5e7eb;
        
        --db-user-bubble: #fbcfe8;
        --db-user-text: #831843;
        --db-char-bubble: #f3f4f6;
        --db-char-text: #111827;

        width: 100%;
        height: 100%;
        background-color: var(--db-bg);
        color: var(--db-text);
        font-family: system-ui, -apple-system, sans-serif;
        position: relative;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
      }
      .roche-plugin-date-battle * {
        box-sizing: border-box;
      }
      .roche-plugin-date-battle .db-svg {
        width: 18px;
        height: 18px;
        fill: none;
        stroke: currentColor;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        display: inline-block;
        vertical-align: middle;
      }
      .roche-plugin-date-battle .db-view {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
      
      /* 顶栏压缩至极简的 48px 高度 */
      .roche-plugin-date-battle .db-navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        height: 48px;
        background: var(--db-surface);
        border-bottom: 1px solid var(--db-border);
        flex-shrink: 0;
      }
      .roche-plugin-date-battle .db-navbar-brand {
        font-size: 15px;
        font-weight: 700;
        color: var(--db-primary);
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .roche-plugin-date-battle .db-tabs {
        display: flex;
        gap: 4px;
        height: 100%;
        align-items: center;
      }
      
      /* 纯图标 Tab/按钮控制 */
      .roche-plugin-date-battle .db-tab {
        width: 32px;
        height: 32px;
        padding: 0;
        border: none;
        background: transparent;
        border-radius: 6px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--db-text-muted);
        transition: all 0.2s;
      }
      .roche-plugin-date-battle .db-tab:hover {
        color: var(--db-primary);
        background: var(--db-primary-light);
      }
      .roche-plugin-date-battle .db-tab.active {
        color: var(--db-primary);
        background: var(--db-primary-light);
      }
      
      /* 游戏头部极简控制（48px） */
      .roche-plugin-date-battle .game-header {
        padding: 0 16px;
        height: 48px;
        background: var(--db-surface);
        border-bottom: 1px solid var(--db-border);
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
      }
      .roche-plugin-date-battle .game-header-title {
        font-weight: 700;
        font-size: 14px;
        color: var(--db-primary);
      }
      .roche-plugin-date-battle .game-header-actions {
        display: flex;
        gap: 4px;
      }
      
      /* 高级纯图标按钮样式 */
      .roche-plugin-date-battle .db-btn-icon {
        width: 32px;
        height: 32px;
        border: 1px solid var(--db-border);
        background: var(--db-surface);
        color: var(--db-text-muted);
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s;
        padding: 0;
      }
      .roche-plugin-date-battle .db-btn-icon:hover {
        color: var(--db-primary);
        border-color: var(--db-primary);
        background: var(--db-primary-light);
      }
      .roche-plugin-date-battle .db-btn-icon-danger {
        width: 32px;
        height: 32px;
        border: 1px solid #fca5a5;
        background: #fee2e2;
        color: #991b1b;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s;
        padding: 0;
      }
      .roche-plugin-date-battle .db-btn-icon-danger:hover {
        background: #fca5a5;
      }

      /* 表单排版布局 */
      .roche-plugin-date-battle .scroll-content {
        padding: 16px;
        overflow-y: auto;
        flex: 1;
        max-width: 800px;
        margin: 0 auto;
        width: 100%;
      }
      .roche-plugin-date-battle .form-card {
        background: var(--db-surface);
        border: 1px solid var(--db-border);
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        margin-bottom: 20px;
      }
      .roche-plugin-date-battle .form-group {
        margin-bottom: 16px;
      }
      .roche-plugin-date-battle .form-row {
        display: flex;
        gap: 16px;
      }
      .roche-plugin-date-battle .form-row .form-group {
        flex: 1;
      }
      .roche-plugin-date-battle label {
        display: block;
        font-weight: 600;
        margin-bottom: 6px;
        color: var(--db-text);
        font-size: 13px;
      }
      .roche-plugin-date-battle select,
      .roche-plugin-date-battle input[type="text"],
      .roche-plugin-date-battle input[type="number"],
      .roche-plugin-date-battle textarea {
        width: 100%;
        padding: 10px 12px;
        background: var(--db-surface);
        border: 1px solid var(--db-border);
        border-radius: 8px;
        color: var(--db-text);
        font-size: 14px;
        outline: none;
        transition: border-color 0.2s, box-shadow 0.2s;
      }
      .roche-plugin-date-battle select:focus,
      .roche-plugin-date-battle input:focus,
      .roche-plugin-date-battle textarea:focus {
        border-color: var(--db-primary);
        box-shadow: 0 0 0 3px rgba(219, 39, 119, 0.1);
      }
      .roche-plugin-date-battle textarea {
        resize: vertical;
        min-height: 80px;
      }
      .roche-plugin-date-battle .worldbook-list {
        background: var(--db-bg);
        border: 1px solid var(--db-border);
        border-radius: 8px;
        padding: 12px;
        max-height: 140px;
        overflow-y: auto;
      }
      .roche-plugin-date-battle .worldbook-item {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
        font-size: 13px;
        cursor: pointer;
      }
      .roche-plugin-date-battle .btn-submit-container {
        display: flex;
        gap: 12px;
        margin-top: 12px;
      }
      
      /* 存档副本列表 */
      .roche-plugin-date-battle .session-grid {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 4px;
      }
      .roche-plugin-date-battle .session-card {
        background: var(--db-surface);
        border: 1px solid var(--db-border);
        border-radius: 10px;
        padding: 12px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 1px 2px rgba(0,0,0,0.02);
        transition: transform 0.2s, box-shadow 0.2s;
      }
      .roche-plugin-date-battle .session-card:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      }
      .roche-plugin-date-battle .session-info {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .roche-plugin-date-battle .session-title-text {
        font-size: 14px;
        font-weight: 700;
        color: var(--db-text);
      }
      .roche-plugin-date-battle .session-desc {
        font-size: 11px;
        color: var(--db-text-muted);
        display: flex;
        gap: 12px;
      }
      .roche-plugin-date-battle .session-actions {
        display: flex;
        gap: 6px;
      }

      /* 主体按钮 */
      .roche-plugin-date-battle .db-btn {
        padding: 10px 18px;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transition: background-color 0.15s, opacity 0.15s;
      }
      .roche-plugin-date-battle .db-btn-pri {
        background: var(--db-primary);
        color: white;
      }
      .roche-plugin-date-battle .db-btn-pri:hover {
        background: var(--db-primary-hover);
      }
      .roche-plugin-date-battle .db-btn-sec {
        background: var(--db-surface-hover);
        color: var(--db-text);
        border: 1px solid var(--db-border);
      }
      .roche-plugin-date-battle .db-btn-sec:hover {
        background: var(--db-border);
      }

      /* 消息对话区域 */
      .roche-plugin-date-battle .chat-container {
        flex: 1;
        overflow-y: auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        background: var(--db-bg);
      }
      .roche-plugin-date-battle .msg-wrapper {
        display: flex;
        flex-direction: column;
        max-width: 80%;
      }
      .roche-plugin-date-battle .msg-wrapper.user {
        align-self: flex-end;
        align-items: flex-end;
      }
      .roche-plugin-date-battle .msg-wrapper.char {
        align-self: flex-start;
        align-items: flex-start;
      }
      .roche-plugin-date-battle .msg-sender {
        font-size: 11px;
        font-weight: 600;
        color: var(--db-text-muted);
        margin-bottom: 4px;
      }
      .roche-plugin-date-battle .msg-bubble {
        padding: 10px 14px;
        border-radius: 12px;
        font-size: 14px;
        line-height: 1.6;
        white-space: pre-wrap;
        word-break: break-all;
        box-shadow: 0 1px 2px rgba(0,0,0,0.03);
      }
      .roche-plugin-date-battle .msg-wrapper.user .msg-bubble {
        background-color: var(--db-user-bubble);
        color: var(--db-user-text);
        border-bottom-right-radius: 2px;
      }
      .roche-plugin-date-battle .msg-wrapper.char .msg-bubble {
        background-color: var(--db-char-bubble);
        color: var(--db-char-text);
        border-bottom-left-radius: 2px;
        border: 1px solid var(--db-border);
      }
      .roche-plugin-date-battle .input-area {
        padding: 12px 16px;
        background: var(--db-surface);
        border-top: 1px solid var(--db-border);
        display: flex;
        gap: 10px;
        align-items: flex-end;
        flex-shrink: 0;
      }
      .roche-plugin-date-battle .input-area textarea {
        flex: 1;
        min-height: 40px;
        max-height: 100px;
        padding: 10px;
        border-radius: 8px;
      }
      .roche-plugin-date-battle .input-area .send-btn {
        background: var(--db-primary);
        color: white;
        border: none;
        padding: 10px 18px;
        border-radius: 8px;
        font-weight: 700;
        cursor: pointer;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.15s;
      }
      .roche-plugin-date-battle .input-area .send-btn:hover {
        background-color: var(--db-primary-hover);
      }
      
      /* 弹窗设计 */
      .roche-plugin-date-battle .db-modal-overlay {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(17, 24, 39, 0.4);
        backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 200;
      }
      .roche-plugin-date-battle .db-modal-card {
        background: var(--db-surface);
        border-radius: 12px;
        padding: 20px;
        width: 90%;
        max-width: 360px;
        box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);
        border: 1px solid var(--db-border);
        animation: db-pop 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      }
      @keyframes db-pop {
        from { transform: scale(0.95); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
      .roche-plugin-date-battle .db-modal-title {
        font-size: 15px;
        font-weight: 700;
        color: var(--db-text);
        margin-bottom: 8px;
      }
      .roche-plugin-date-battle .db-modal-message {
        font-size: 13px;
        color: var(--db-text-muted);
        line-height: 1.5;
        margin-bottom: 16px;
      }
      .roche-plugin-date-battle .db-modal-actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
      }

      /* Loading */
      .roche-plugin-date-battle .db-overlay {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(2px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 100;
        gap: 16px;
      }
      .roche-plugin-date-battle .db-spinner {
        width: 36px;
        height: 36px;
        border: 3px solid var(--db-primary-light);
        border-left-color: var(--db-primary);
        border-radius: 50%;
        animation: db-spin 0.8s linear infinite;
      }
      @keyframes db-spin {
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  }

  function removeStyles() {
    const styleTag = document.getElementById(STYLE_ID);
    if (styleTag) styleTag.remove();
  }

  // 2. 纯矢量路径 SVG 图标资源 (不含任何 emoji)
  const SVGS = {
    heart: `<svg class="db-svg" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    plus: `<svg class="db-svg" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
    folder: `<svg class="db-svg" viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
    play: `<svg class="db-svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
    trash: `<svg class="db-svg" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`,
    back: `<svg class="db-svg" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
    logout: `<svg class="db-svg" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>`,
    reset: `<svg class="db-svg" viewBox="0 0 24 24"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>`,
    home: `<svg class="db-svg" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`
  };

  // 3. 人称文本描述映射
  const PRONOUN_MAP = {
    first: "第一人称 (我)",
    second: "第二人称 (你)",
    third: "第三人称 (名字或他/她)"
  };

  function showCustomConfirm(container, title, message, onConfirm) {
    const root = container.querySelector(".roche-plugin-date-battle") || container;
    const exist = root.querySelector(".db-modal-overlay");
    if (exist) exist.remove();

    const overlay = document.createElement("div");
    overlay.className = "db-modal-overlay";
    overlay.innerHTML = `
      <div class="db-modal-card">
        <div class="db-modal-title">${escapeHtml(title)}</div>
        <div class="db-modal-message">${escapeHtml(message)}</div>
        <div class="db-modal-actions">
          <button class="db-btn db-btn-sec" id="db-modal-cancel">取消</button>
          <button class="db-btn db-btn-pri" id="db-modal-confirm">确认</button>
        </div>
      </div>
    `;
    root.appendChild(overlay);

    overlay.querySelector("#db-modal-cancel").onclick = () => overlay.remove();
    overlay.querySelector("#db-modal-confirm").onclick = () => {
      overlay.remove();
      onConfirm();
    };
  }

  function showLoading(text) {
    const overlay = document.getElementById("db-loading-overlay");
    const loadingText = document.getElementById("db-loading-text");
    if (overlay && loadingText) {
      loadingText.textContent = text || "正在处理...";
      overlay.style.display = "flex";
    }
  }

  function hideLoading() {
    const overlay = document.getElementById("db-loading-overlay");
    if (overlay) overlay.style.display = "none";
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function renderHistory(chatContainer, history, charName, userName) {
    const displayHistory = history.filter((msg, idx) => {
      return !(idx === 0 && msg.role === "user" && msg.content.includes("第一回合"));
    });

    chatContainer.innerHTML = displayHistory.map(msg => {
      const isUser = msg.role === "user";
      const sender = isUser ? userName : charName;
      const bubbleClass = isUser ? "user" : "char";
      return `
        <div class="msg-wrapper ${bubbleClass}">
          <div class="msg-sender">${sender}</div>
          <div class="msg-bubble">${escapeHtml(msg.content)}</div>
        </div>
      `;
    }).join("");

    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  // 4. 渲染：游戏副本视角 (全 SVG 控制，顶栏优化)
  function renderGameView(container, roche, config, history, systemPrompt, character, userPersona, sessionId) {
    switchView(container, roche, "game");
    const gameDiv = document.getElementById("db-game-view");

    const userName = userPersona.handle || userPersona.name || "你";
    const charName = character.handle || character.name || "对手";

    gameDiv.innerHTML = `
      <div class="game-header">
        <div class="game-header-title">${escapeHtml(config.sessionName)}</div>
        <div class="game-header-actions">
          <button class="db-btn-icon" id="db-game-back" title="返回副本大厅">
            ${SVGS.back}
          </button>
          <button class="db-btn-icon" id="db-game-reset" title="重置本局进度">
            ${SVGS.reset}
          </button>
          <button class="db-btn-icon" id="db-game-close" title="退出插件并返回宿主">
            ${SVGS.logout}
          </button>
        </div>
      </div>
      
      <div class="chat-container" id="db-chat-container"></div>
      
      <div class="input-area">
        <textarea id="db-input-text" placeholder="输入你想做出的自由动作与台词描述（按 Ctrl+Enter 行动）..."></textarea>
        <button class="send-btn" id="db-send-btn">发送</button>
      </div>
    `;

    const chatContainer = document.getElementById("db-chat-container");
    renderHistory(chatContainer, history, charName, userName);

    document.getElementById("db-game-back").onclick = () => {
      switchView(container, roche, "list");
    };

    document.getElementById("db-game-close").onclick = () => roche.ui.closeApp();

    document.getElementById("db-game-reset").onclick = () => {
      showCustomConfirm(container, "重置本副本", "确定要清空本副本的聊天记录重新开始吗？副本配置不会丢失。", async () => {
        try {
          showLoading("正在重新描摹开场舞台...");
          const openingPrompt = "请开启《约会大作战》的第一回合。作为主持人和对手，描述我们当前所处的具体场景、你的出场状态、并向我（玩家）打个招呼作为开端，等待我的第一步自由行动。";
          const result = await roche.ai.chat({
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: openingPrompt }
            ]
          });
          const initialReply = result && (result.text || result.content);
          if (!initialReply) throw new Error("AI 反应为空，请重试");

          const newHistory = [
            { role: "user", content: openingPrompt },
            { role: "assistant", content: initialReply }
          ];

          await roche.storage.set(`db_session_history_${sessionId}`, newHistory);
          hideLoading();
          renderGameView(container, roche, config, newHistory, systemPrompt, character, userPersona, sessionId);
        } catch (err) {
          hideLoading();
          roche.ui.toast("重置失败: " + err.message);
        }
      });
    };

    const sendBtn = document.getElementById("db-send-btn");
    const textarea = document.getElementById("db-input-text");

    const performAction = async () => {
      const text = textarea.value.trim();
      if (!text) return;

      textarea.disabled = true;
      sendBtn.disabled = true;
      showLoading("对方正在组织下一步动作...");

      history.push({ role: "user", content: text });
      renderHistory(chatContainer, history, charName, userName);
      textarea.value = "";

      await roche.storage.set(`db_session_history_${sessionId}`, history);

      let sessions = await roche.storage.get("date_battle_sessions") || [];
      const currentIdx = sessions.findIndex(s => s.id === sessionId);
      if (currentIdx !== -1) {
        sessions[currentIdx].createdAt = Date.now();
        await roche.storage.set("date_battle_sessions", sessions);
      }

      try {
        const result = await roche.ai.chat({
          messages: [
            { role: "system", content: systemPrompt },
            ...history
          ]
        });

        const replyContent = result && (result.text || result.content);
        if (!replyContent) throw new Error("服务未回复有效对话");

        history.push({ role: "assistant", content: replyContent });
        await roche.storage.set(`db_session_history_${sessionId}`, history);

        renderHistory(chatContainer, history, charName, userName);
      } catch(e) {
        console.error(e);
        roche.ui.toast("AI 沟通中断，原因：" + (e.message || "未知") + "。数据已在本地保存，您可以重试。");
        history.pop();
        await roche.storage.set(`db_session_history_${sessionId}`, history);
        renderHistory(chatContainer, history, charName, userName);
      } finally {
        textarea.disabled = false;
        sendBtn.disabled = false;
        hideLoading();
        textarea.focus();
      }
    };

    sendBtn.onclick = performAction;
    textarea.onkeydown = (e) => {
      if (e.key === 'Enter' && e.ctrlKey) {
        e.preventDefault();
        performAction();
      }
    };
  }

  // 路由器
  async function switchView(container, roche, viewName) {
    const setupView = document.getElementById("db-setup-view");
    const gameView = document.getElementById("db-game-view");
    const listBtn = document.getElementById("db-nav-list-btn");
    const newBtn = document.getElementById("db-nav-new-btn");

    if (viewName === "setup") {
      setupView.style.display = "flex";
      gameView.style.display = "none";
      newBtn.classList.add("active");
      listBtn.classList.remove("active");
      await renderSetupForm(container, roche);
    } else if (viewName === "list") {
      setupView.style.display = "flex";
      gameView.style.display = "none";
      newBtn.classList.remove("active");
      listBtn.classList.add("active");
      await renderSessionList(container, roche);
    } else if (viewName === "game") {
      setupView.style.display = "none";
      gameView.style.display = "flex";
    }
  }

  // 新建大作战副本核心链路
  async function createNewGame(container, roche) {
    try {
      const userEl = document.getElementById("db-user-select");
      const charEl = document.getElementById("db-char-select");
      if (!userEl || !charEl) throw new Error("页面载入异常，请刷新重试");

      const userId = userEl.value;
      const charId = charEl.value;
      const sessionNameInput = document.getElementById("db-session-name").value.trim();
      const worldType = document.getElementById("db-world-type").value.trim() || "现代校园";
      const wordMin = parseInt(document.getElementById("db-word-min").value, 10) || 150;
      const wordMax = parseInt(document.getElementById("db-word-max").value, 10) || 350;
      const worldIntro = document.getElementById("db-world-intro").value.trim();
      const userBg = document.getElementById("db-user-bg").value.trim();
      const charBg = document.getElementById("db-char-bg").value.trim();
      const userPronoun = document.getElementById("db-user-pronoun").value;
      const charPronoun = document.getElementById("db-char-pronoun").value;

      const selectedWbElements = document.querySelectorAll('input[name="db-wb-category"]:checked');
      const selectedWbs = Array.from(selectedWbElements).map(el => el.value);

      if (wordMin >= wordMax) {
        roche.ui.toast("单回合字数下限不能大于或等于上限！");
        return;
      }

      // 处理副本命名，限制为 15 字符以内 [1]
      let displaySessionName = sessionNameInput || `大作战副本_${Date.now().toString(36).toUpperCase()}`;
      displaySessionName = displaySessionName.substring(0, 15);

      const config = { 
        userId, 
        charId, 
        sessionName: displaySessionName, 
        worldType, 
        wordMin, 
        wordMax, 
        worldIntro, 
        userBg, 
        charBg, 
        userPronoun, 
        charPronoun, 
        worldbooks: selectedWbs 
      };
      
      await roche.storage.set("date_battle_last_config", config);
      showLoading("正在同步系统人设并构建开局舞台描述...");

      let userPersona = null;
      let character = null;
      try {
        const users = await roche.persona.getUserPersonas() || [];
        userPersona = users.find(u => u.id === userId);
        if (roche.character && typeof roche.character.get === 'function') {
          character = await roche.character.get(charId);
        } else {
          const chars = await roche.character.list() || [];
          character = chars.find(c => c.id === charId);
        }
      } catch (e) {
        console.warn("加载核心人物报错，尝试降级", e);
        const chars = await roche.character.list() || [];
        character = chars.find(c => c.id === charId);
      }

      if (!userPersona || !character) {
        throw new Error("加载人物数据失败，请确保宿主已预设角色和人设");
      }

      let worldbookText = "";
      if (selectedWbs.length > 0) {
        for (const catId of selectedWbs) {
          try {
            const entries = await roche.worldbook.getEntries({ categoryId: catId });
            if (entries && entries.length > 0) {
              worldbookText += `\n【世界书分类 - ${catId}】:\n` + entries.map(e => `- ${e.key || e.name}: ${e.content || e.value || ""}`).join("\n");
            }
          } catch(e) {
            console.error(`世界书获取异常: ${catId}`, e);
          }
        }
      }

      const userName = userPersona.handle || userPersona.name || "玩家";
      const charName = character.handle || character.name || "角色";

      // 精确融入用户配置的用户人称与角色人称约束 [3]
      const systemPrompt = `
你是一个优秀的 TRPG 主持人（GM）兼角色扮演者。当前正在进行一场名为《约会大作战》的回合制文字恋爱冒险游戏。

【世界设定】
世界类型/画风: ${worldType}
场景起因与背景介绍: ${worldIntro || "一次偶然的邂逅"}
${worldbookText ? `\n【引入参考世界书设定数据】\n${worldbookText}` : ''}

【玩家信息 (User)】
姓名/昵称: ${userName}
玩家身份背景: ${userBg || "普通参与者"}
完整人设性格参考: ${userPersona.persona || userPersona.bio || "无"}

【对手角色信息 (Character)】
姓名/昵称: ${charName}
对手身份背景: ${charBg || "攻略对象"}
完整人设性格参考: ${character.persona || character.bio || "无"}

【主视角人称约束】
在本次互动所有的场景演进、旁白对话以及内心描写叙述中，必须严格执行以下人称视角规定：
- 描写玩家 (User: ${userName}) 行动、对话与遭遇时，主视角人称必须为：${PRONOUN_MAP[userPronoun]}。
- 描写对手 (Character: ${charName}) 行动、对话与遭遇时，主视角人称必须为：${PRONOUN_MAP[charPronoun]}。
请你在推进世界和叙述对白时，绝对遵守这一人称语法规范！

【游戏核心规则】
1. 这是一场回合制互动。你负责扮演对手角色（${charName}）以及周围的世界环境（作为GM）。
2. 你的每一次回复必须高度符合该角色的性格特色、言行习惯，并切合当前的世界画风。
3. 你的每一回合回复文本长度（包含对白与描述）必须严格限制在 [${wordMin}] 字 到 [${wordMax}] 字 的区间内，不得太短，也不得超限。
4. 在回复中：你需要描述对方角色的动作、对话和心理活动，同时描绘环境的变化，最后留出空间等待玩家（User）采取下一步行动。
5. 绝不要替玩家（User）做出任何选择或擅自说出玩家的台词。
6. 保持绝对的角色沉浸，严禁跳戏，严禁提及你是AI或这只是程序。
`;

      const openingPrompt = "请开启《约会大作战》的第一回合。作为主持人和对手，描述我们当前所处的具体场景、你的出场状态、并向我（玩家）打个招呼作为开端，等待我的第一步自由行动。";
      let initialReply = "";
      try {
        const result = await roche.ai.chat({
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: openingPrompt }
          ]
        });
        initialReply = result && (result.text || result.content);
        if (!initialReply) throw new Error("AI 返回了空数据，请检查服务商及网络配置");
      } catch (aiErr) {
        throw new Error("AI 初始化世界失败: " + (aiErr.message || "请求超时"));
      }

      const sessionId = "sess_" + Date.now().toString(36) + Math.random().toString(36).substr(2, 4);
      const history = [
        { role: "user", content: openingPrompt },
        { role: "assistant", content: initialReply }
      ];

      const newSessionMeta = {
        id: sessionId,
        name: displaySessionName,
        worldType,
        characterName: charName,
        userName,
        createdAt: Date.now()
      };

      let sessions = await roche.storage.get("date_battle_sessions") || [];
      sessions.unshift(newSessionMeta);
      await roche.storage.set("date_battle_sessions", sessions);

      await roche.storage.set(`db_session_config_${sessionId}`, config);
      await roche.storage.set(`db_session_history_${sessionId}`, history);
      await roche.storage.set("date_battle_current_session_id", sessionId);

      hideLoading();
      renderGameView(container, roche, config, history, systemPrompt, character, userPersona, sessionId);

    } catch (fatalError) {
      hideLoading();
      console.error(fatalError);
      roche.ui.toast("创建大作战副本失败: " + fatalError.message);
    }
  }

  // 恢复（加载）已有副本
  async function resumeGame(container, roche, sessionId) {
    showLoading("正在读取副本进度及世界设定...");
    try {
      const config = await roche.storage.get(`db_session_config_${sessionId}`);
      const history = await roche.storage.get(`db_session_history_${sessionId}`);

      if (!config || !history) throw new Error("该副本数据已损坏或不存在");

      let userPersona = null;
      let character = null;

      try {
        const users = await roche.persona.getUserPersonas() || [];
        userPersona = users.find(u => u.id === config.userId);
        if (roche.character && typeof roche.character.get === 'function') {
          character = await roche.character.get(config.charId);
        } else {
          const chars = await roche.character.list() || [];
          character = chars.find(c => c.id === config.charId);
        }
      } catch (e) {
        const chars = await roche.character.list() || [];
        character = chars.find(c => c.id === config.charId);
      }

      if (!userPersona || !character) {
        throw new Error("人设或角色未找到，可能已被宿主系统移除");
      }

      let worldbookText = "";
      if (config.worldbooks && config.worldbooks.length > 0) {
        for (const catId of config.worldbooks) {
          try {
            const entries = await roche.worldbook.getEntries({ categoryId: catId });
            if (entries && entries.length > 0) {
              worldbookText += `\n【世界书分类 - ${catId}】:\n` + entries.map(e => `- ${e.key || e.name}: ${e.content || e.value || ""}`).join("\n");
            }
          } catch(e) {
            console.error(e);
          }
        }
      }

      const userName = userPersona.handle || userPersona.name || "玩家";
      const charName = character.handle || character.name || "角色";

      // 组装带有自定义人称约束的指令
      const systemPrompt = `
你是一个优秀的 TRPG 主持人（GM）兼角色扮演者。当前正在进行一场名为《约会大作战》的回合制文字恋爱冒险游戏。

【世界设定】
世界类型/画风: ${config.worldType}
场景起因与背景介绍: ${config.worldIntro || "一次偶然的邂逅"}
${worldbookText ? `\n【引入参考世界书设定数据】\n${worldbookText}` : ''}

【玩家信息 (User)】
姓名/昵称: ${userName}
玩家身份背景: ${config.userBg || "普通参与者"}
完整人设性格参考: ${userPersona.persona || userPersona.bio || "无"}

【对手角色信息 (Character)】
姓名/昵称: ${charName}
对手身份背景: ${config.charBg || "攻略对象"}
完整人设性格参考: ${character.persona || character.bio || "无"}

【主视角人称约束】
在本次互动所有的场景演进、旁白对话以及内心描写叙述中，必须严格执行以下人称视角规定：
- 描写玩家 (User: ${userName}) 行动、对话与遭遇时，主视角人称必须为：${PRONOUN_MAP[config.userPronoun || 'second']}。
- 描写对手 (Character: ${charName}) 行动、对话与遭遇时，主视角人称必须为：${PRONOUN_MAP[config.charPronoun || 'third']}。
请你在推进世界和叙述对白时，绝对遵守这一人称语法规范！

【游戏核心规则】
1. 这是一场回合制互动。你负责扮演对手角色（${charName}）以及周围的世界环境（作为GM）。
2. 你的每一次回复必须高度符合该角色的性格特色、言行习惯，并切合当前的世界画风。
3. 你的每一回合回复文本长度（包含对白与描述）必须严格限制在 [${config.wordMin}] 字 到 [${config.wordMax}] 字 的区间内，不得太短，也不得超限。
4. 在回复中：你需要描述对方角色的动作、对话和心理活动，同时描绘环境的变化，最后留出空间等待玩家（User）采取下一步行动。
5. 绝不要替玩家（User）做出任何选择或擅自说出玩家的台词。
6. 保持绝对的角色沉浸，严禁跳戏，严禁提及你是AI或这只是程序。
`;

      await roche.storage.set("date_battle_current_session_id", sessionId);
      hideLoading();
      renderGameView(container, roche, config, history, systemPrompt, character, userPersona, sessionId);

    } catch (e) {
      hideLoading();
      roche.ui.toast("读取副本失败: " + e.message);
    }
  }

  // 删除特定副本
  async function deleteSession(container, roche, sessionId) {
    try {
      let sessions = await roche.storage.get("date_battle_sessions") || [];
      sessions = sessions.filter(s => s.id !== sessionId);
      await roche.storage.set("date_battle_sessions", sessions);

      await roche.storage.delete(`db_session_config_${sessionId}`);
      await roche.storage.delete(`db_session_history_${sessionId}`);

      const current = await roche.storage.get("date_battle_current_session_id");
      if (current === sessionId) {
        await roche.storage.delete("date_battle_current_session_id");
      }

      roche.ui.toast("副本已成功删除。");
      await renderSessionList(container, roche);
    } catch(e) {
      roche.ui.toast("删除失败: " + e.message);
    }
  }

  // 渲染：配置表单 (添加了人称控制项与自定义命名分栏)
  async function renderSetupForm(container, roche) {
    const setupDiv = document.getElementById("db-setup-view");
    showLoading("加载人设与设定数据...");

    let users = [];
    let chars = [];
    let worldbookCategories = [];

    try {
      users = await roche.persona.getUserPersonas() || [];
      chars = await roche.character.list() || [];
      worldbookCategories = await roche.worldbook.list() || [];
    } catch (e) {
      console.error("加载 Roche 数据失败:", e);
    }

    hideLoading();

    if (users.length === 0 || chars.length === 0) {
      setupDiv.innerHTML = `
        <div class="scroll-content">
          <div style="text-align: center; margin-top: 60px; color: var(--db-text-muted);">
            <p>未检测到可用的用户人设或角色。</p>
            <p style="font-size: 13px; margin-top: 8px;">请先在宿主应用中创建至少一个“用户人设”和一个“角色”再来开始大作战吧。</p>
            <button class="db-btn db-btn-sec" id="db-close-empty" style="margin-top: 16px;">
              ${SVGS.logout} 退出插件
            </button>
          </div>
        </div>
      `;
      document.getElementById("db-close-empty").onclick = () => roche.ui.closeApp();
      return;
    }

    const cachedConfig = await roche.storage.get("date_battle_last_config") || {};

    const wbHtml = worldbookCategories.map(cat => {
      const isChecked = (cachedConfig.worldbooks || []).includes(cat.id) ? "checked" : "";
      return `
        <label class="worldbook-item">
          <input type="checkbox" name="db-wb-category" value="${cat.id}" ${isChecked}>
          <span>${escapeHtml(cat.name || cat.title || cat.id)}</span>
        </label>
      `;
    }).join("") || `<span style="color: var(--db-text-muted); font-size:12px;">暂无可用世界书</span>`;

    setupDiv.innerHTML = `
      <div class="scroll-content">
        <div class="form-card">
          <!-- 15字以内副本名称配置 -->
          <div class="form-group">
            <label>副本名称 (15字以内)</label>
            <input type="text" id="db-session-name" maxlength="15" placeholder="例如：夕阳下的教室 (留空则自动生成)" value="${escapeHtml(cachedConfig.sessionName || '')}">
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>选择你的 User 人设</label>
              <select id="db-user-select">
                ${users.map(u => `<option value="${u.id}" ${cachedConfig.userId === u.id ? 'selected' : ''}>${escapeHtml(u.handle || u.name)}</option>`).join("")}
              </select>
            </div>
            <div class="form-group">
              <label>选择攻略的 Character 角色</label>
              <select id="db-char-select">
                ${chars.map(c => `<option value="${c.id}" ${cachedConfig.charId === c.id ? 'selected' : ''}>${escapeHtml(c.handle || c.name)}</option>`).join("")}
              </select>
            </div>
          </div>

          <!-- 人称配置栏：支持分栏控制 [3] -->
          <div class="form-row">
            <div class="form-group">
              <label>User 人称 (你的视角)</label>
              <select id="db-user-pronoun">
                <option value="first" ${cachedConfig.userPronoun === 'first' ? 'selected' : ''}>第一人称 (我)</option>
                <option value="second" ${cachedConfig.userPronoun === 'second' || !cachedConfig.userPronoun ? 'selected' : ''}>第二人称 (你)</option>
                <option value="third" ${cachedConfig.userPronoun === 'third' ? 'selected' : ''}>第三人称 (名字/他/她)</option>
              </select>
            </div>
            <div class="form-group">
              <label>Char 人称 (对方的视角)</label>
              <select id="db-char-pronoun">
                <option value="first" ${cachedConfig.charPronoun === 'first' ? 'selected' : ''}>第一人称 (我)</option>
                <option value="second" ${cachedConfig.charPronoun === 'second' ? 'selected' : ''}>第二人称 (你)</option>
                <option value="third" ${cachedConfig.charPronoun === 'third' || !cachedConfig.charPronoun ? 'selected' : ''}>第三人称 (名字/他/她)</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>世界类型与画风</label>
              <input type="text" id="db-world-type" placeholder="例如：赛博朋克、玄幻仙侠、现代校园恋爱" value="${escapeHtml(cachedConfig.worldType || '现代校园恋爱')}">
            </div>
            <div class="form-group" style="flex: 2; display: flex; gap: 8px;">
              <div style="flex: 1;">
                <label>单回合字数下限</label>
                <input type="number" id="db-word-min" value="${cachedConfig.wordMin || 150}" min="30" max="1000">
              </div>
              <div style="flex: 1;">
                <label>单回合字数上限</label>
                <input type="number" id="db-word-max" value="${cachedConfig.wordMax || 350}" min="50" max="2000">
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>世界背景简介 (初始情境描述)</label>
            <textarea id="db-world-intro" placeholder="例如：我们在放学后的夕阳教室里...">${escapeHtml(cachedConfig.worldIntro || '')}</textarea>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>你的身份背景与设定 (User)</label>
              <textarea id="db-user-bg" placeholder="在这个世界中，你的身份以及和对方的关系是什么？">${escapeHtml(cachedConfig.userBg || '')}</textarea>
            </div>
            <div class="form-group">
              <label>对方的身份背景与设定 (Char)</label>
              <textarea id="db-char-bg" placeholder="在这个世界中，对方扮演什么角色？">${escapeHtml(cachedConfig.charBg || '')}</textarea>
            </div>
          </div>

          <div class="form-group">
            <label>搭载宿主世界书 (可多选)</label>
            <div class="worldbook-list">
              ${wbHtml}
            </div>
          </div>

          <div class="btn-submit-container">
            <button class="db-btn db-btn-pri" id="db-start-btn" style="flex: 1;">
              ${SVGS.plus} 开启大作战副本
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById("db-start-btn").onclick = async () => {
      await createNewGame(container, roche);
    };
  }

  // 渲染副本列表
  async function renderSessionList(container, roche) {
    const setupDiv = document.getElementById("db-setup-view");
    showLoading("加载副本列表中...");

    let sessions = await roche.storage.get("date_battle_sessions") || [];
    hideLoading();

    if (sessions.length === 0) {
      setupDiv.innerHTML = `
        <div class="scroll-content">
          <div style="text-align: center; margin-top: 60px; color: var(--db-text-muted);">
            <p>暂无任何开启过的大作战副本。</p>
            <p style="font-size: 13px; margin-top: 8px;">赶快在上方“新建大作战”中开启一段浪漫冒险吧。</p>
          </div>
        </div>
      `;
      return;
    }

    setupDiv.innerHTML = `
      <div class="scroll-content">
        <div class="session-grid">
          ${sessions.map(s => {
            const timeStr = new Date(s.createdAt).toLocaleString(undefined, {
              month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit'
            });
            return `
              <div class="session-card">
                <div class="session-info">
                  <div class="session-title-text">${escapeHtml(s.name)}</div>
                  <div class="session-desc">
                    <span>画风: ${escapeHtml(s.worldType)}</span>
                    <span>攻略角色: ${escapeHtml(s.characterName)}</span>
                    <span>更新于: ${timeStr}</span>
                  </div>
                </div>
                <div class="session-actions">
                  <button class="db-btn db-btn-sec db-btn-sm" data-action="resume" data-id="${s.id}">
                    ${SVGS.play} 继续
                  </button>
                  <button class="db-btn db-btn-danger db-btn-sm" data-action="delete" data-id="${s.id}">
                    ${SVGS.trash} 删除
                  </button>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;

    setupDiv.querySelectorAll('[data-action="resume"]').forEach(btn => {
      btn.onclick = async () => {
        const id = btn.getAttribute("data-id");
        await resumeGame(container, roche, id);
      };
    });

    setupDiv.querySelectorAll('[data-action="delete"]').forEach(btn => {
      btn.onclick = () => {
        const id = btn.getAttribute("data-id");
        showCustomConfirm(container, "删除副本", "确定要彻底删除该约会大作战副本吗？此操作无法恢复。", async () => {
          await deleteSession(container, roche, id);
        });
      };
    });
  }

  // 主程序生命周期
  window.RochePlugin.register({
    id: "date-battle",
    name: "约会大作战",
    version: "1.1.0",
    apps: [
      {
        id: "date-battle-app",
        name: "约会大作战",
        icon: "favorite",
        iconImage: "",
        async mount(container, roche) {
          injectStyles();
          
          // 顶栏重新排版，并追加了“退出插件返回宿主桌面”的返回主页面按钮 [1, 2]
          container.innerHTML = `
            <div class="roche-plugin-date-battle">
              <div class="db-navbar">
                <div class="db-navbar-brand">
                  ${SVGS.heart} 约会大作战
                </div>
                <div class="db-tabs">
                  <button class="db-tab active" id="db-nav-new-btn" title="新建大作战">${SVGS.plus}</button>
                  <button class="db-tab" id="db-nav-list-btn" title="副本管理列表">${SVGS.folder}</button>
                  <button class="db-tab" id="db-nav-close-btn" title="退出并返回主页面">${SVGS.logout}</button>
                </div>
              </div>

              <div id="db-setup-view" class="db-view"></div>
              <div id="db-game-view" class="db-view" style="display: none;"></div>
              
              <div id="db-loading-overlay" class="db-overlay" style="display: none;">
                <div class="db-spinner"></div>
                <div id="db-loading-text">正在初始化世界...</div>
              </div>
            </div>
          `;

          document.getElementById("db-nav-new-btn").onclick = async () => {
            await switchView(container, roche, "setup");
          };
          document.getElementById("db-nav-list-btn").onclick = async () => {
            await switchView(container, roche, "list");
          };
          
          // 返回宿主主页面按钮事件 [2]
          document.getElementById("db-nav-close-btn").onclick = () => {
            roche.ui.closeApp();
          };

          const lastActiveSess = await roche.storage.get("date_battle_current_session_id");
          if (lastActiveSess) {
            try {
              await resumeGame(container, roche, lastActiveSess);
              return;
            } catch(e) {
              console.warn("自动断点恢复失败，重定向到表单页", e);
            }
          }
          await switchView(container, roche, "setup");
        },

        async unmount(container, roche) {
          removeStyles();
          container.replaceChildren();
        }
      }
    ]
  });
})();