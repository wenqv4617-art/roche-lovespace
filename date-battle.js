(function() {
  const STYLE_ID = "roche-plugin-date-battle-styles";

  // 1. 独立辅助函数
  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .roche-plugin-date-battle {
        --db-pink: #ec4899;
        --db-pink-hover: #db2777;
        --db-bg: #111827;
        --db-surface: #1f2937;
        --db-surface-light: #374151;
        --db-text: #f3f4f6;
        --db-text-muted: #9ca3af;
        --db-border: #4b5563;
        --db-user-bubble: #db2777;
        --db-char-bubble: #374151;

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
      .roche-plugin-date-battle .db-view {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
      /* 配置页面 */
      .roche-plugin-date-battle .setup-container {
        padding: 24px;
        overflow-y: auto;
        flex: 1;
        max-width: 800px;
        margin: 0 auto;
        width: 100%;
      }
      .roche-plugin-date-battle .setup-title {
        font-size: 24px;
        font-weight: bold;
        color: var(--db-pink);
        margin-bottom: 20px;
        text-align: center;
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
        color: var(--db-text-muted);
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
        transition: border-color 0.2s;
      }
      .roche-plugin-date-battle select:focus,
      .roche-plugin-date-battle input:focus,
      .roche-plugin-date-battle textarea:focus {
        border-color: var(--db-pink);
      }
      .roche-plugin-date-battle textarea {
        resize: vertical;
        min-height: 80px;
      }
      .roche-plugin-date-battle .worldbook-list {
        background: var(--db-surface);
        border: 1px solid var(--db-border);
        border-radius: 8px;
        padding: 10px;
        max-height: 120px;
        overflow-y: auto;
      }
      .roche-plugin-date-battle .worldbook-item {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 6px;
        font-size: 13px;
      }
      .roche-plugin-date-battle .btn-group {
        display: flex;
        gap: 12px;
        margin-top: 24px;
      }
      .roche-plugin-date-battle .btn {
        flex: 1;
        padding: 12px;
        border: none;
        border-radius: 8px;
        font-weight: bold;
        font-size: 15px;
        cursor: pointer;
        transition: background-color 0.2s, opacity 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
      }
      .roche-plugin-date-battle .btn-primary {
        background-color: var(--db-pink);
        color: white;
      }
      .roche-plugin-date-battle .btn-primary:hover {
        background-color: var(--db-pink-hover);
      }
      .roche-plugin-date-battle .btn-secondary {
        background-color: var(--db-surface-light);
        color: var(--db-text);
      }
      .roche-plugin-date-battle .btn-secondary:hover {
        opacity: 0.9;
      }
      
      /* 游戏页面 */
      .roche-plugin-date-battle .game-header {
        padding: 12px 20px;
        background: var(--db-surface);
        border-bottom: 1px solid var(--db-border);
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
      }
      .roche-plugin-date-battle .game-header-title {
        font-weight: bold;
        font-size: 16px;
        color: var(--db-pink);
      }
      .roche-plugin-date-battle .game-header-actions {
        display: flex;
        gap: 8px;
      }
      .roche-plugin-date-battle .game-header-btn {
        background: var(--db-surface-light);
        border: 1px solid var(--db-border);
        color: var(--db-text-muted);
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 12px;
        cursor: pointer;
      }
      .roche-plugin-date-battle .game-header-btn:hover {
        color: var(--db-text);
        border-color: var(--db-pink);
      }
      .roche-plugin-date-battle .chat-container {
        flex: 1;
        overflow-y: auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 16px;
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
        color: var(--db-text-muted);
        margin-bottom: 4px;
      }
      .roche-plugin-date-battle .msg-bubble {
        padding: 12px 16px;
        border-radius: 12px;
        font-size: 14px;
        line-height: 1.6;
        white-space: pre-wrap;
        word-break: break-all;
      }
      .roche-plugin-date-battle .msg-wrapper.user .msg-bubble {
        background-color: var(--db-user-bubble);
        color: white;
        border-bottom-right-radius: 2px;
      }
      .roche-plugin-date-battle .msg-wrapper.char .msg-bubble {
        background-color: var(--db-char-bubble);
        color: var(--db-text);
        border-bottom-left-radius: 2px;
      }
      .roche-plugin-date-battle .input-area {
        padding: 16px 20px;
        background: var(--db-surface);
        border-top: 1px solid var(--db-border);
        display: flex;
        gap: 12px;
        align-items: flex-end;
        flex-shrink: 0;
      }
      .roche-plugin-date-battle .input-area textarea {
        flex: 1;
        min-height: 50px;
        max-height: 120px;
        padding: 10px;
      }
      .roche-plugin-date-battle .input-area .send-btn {
        background: var(--db-pink);
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .roche-plugin-date-battle .input-area .send-btn:hover {
        background-color: var(--db-pink-hover);
      }
      
      /* 加载遮罩 */
      .roche-plugin-date-battle .db-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(17, 24, 39, 0.85);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 100;
        gap: 16px;
      }
      .roche-plugin-date-battle .db-spinner {
        width: 40px;
        height: 40px;
        border: 4px solid rgba(236, 72, 153, 0.1);
        border-left-color: var(--db-pink);
        border-radius: 50%;
        animation: db-spin 1s linear infinite;
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

  // 渲染历史消息
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

  // 渲染游戏核心界面
  function renderGameView(container, roche, config, history, systemPrompt, character, userPersona) {
    document.getElementById("db-setup-view").style.display = "none";
    const gameDiv = document.getElementById("db-game-view");
    gameDiv.style.display = "flex";

    const userName = userPersona.handle || userPersona.name || "你";
    const charName = character.handle || character.name || "对手";

    gameDiv.innerHTML = `
      <div class="game-header">
        <div class="game-header-title">🌸 约会中: 与 ${charName} 在 [${config.worldType}]</div>
        <div class="game-header-actions">
          <button class="game-header-btn" id="db-back-btn">配置列表</button>
          <button class="game-header-btn" id="db-reset-btn">重置冒险</button>
          <button class="game-header-btn" id="db-close-btn">退出</button>
        </div>
      </div>
      
      <div class="chat-container" id="db-chat-container"></div>
      
      <div class="input-area">
        <textarea id="db-input-text" placeholder="在这输入你的自由行动描述或说话内容（支持任意自由文本，按 Ctrl+Enter 快速发送）..."></textarea>
        <button class="send-btn" id="db-send-btn">行动</button>
      </div>
    `;

    const chatContainer = document.getElementById("db-chat-container");
    renderHistory(chatContainer, history, charName, userName);

    document.getElementById("db-back-btn").onclick = () => {
      gameDiv.style.display = "none";
      document.getElementById("db-setup-view").style.display = "flex";
    };

    document.getElementById("db-close-btn").onclick = () => roche.ui.closeApp();

    document.getElementById("db-reset-btn").onclick = async () => {
      try {
        const confirmReset = await roche.ui.confirm({
          title: "重新开始？",
          message: "确定要重新生成本次大作战吗？当前保存在本地的进度将会被清空。"
        });
        if (confirmReset) {
          await startGame(container, roche, false);
        }
      } catch (err) {
        console.error("重置异常", err);
      }
    };

    const sendBtn = document.getElementById("db-send-btn");
    const textarea = document.getElementById("db-input-text");

    const performAction = async () => {
      const text = textarea.value.trim();
      if (!text) return;

      textarea.disabled = true;
      sendBtn.disabled = true;
      showLoading("对方正在酝酿反应...");

      history.push({ role: "user", content: text });
      renderHistory(chatContainer, history, charName, userName);
      textarea.value = "";

      await roche.storage.set("date_battle_history", history);

      try {
        const result = await roche.ai.chat({
          messages: [
            { role: "system", content: systemPrompt },
            ...history
          ]
        });

        const replyContent = result && (result.text || result.content);
        if (!replyContent) {
          throw new Error("模型未正常返回文本，请检查接口或网络设置");
        }

        history.push({ role: "assistant", content: replyContent });
        await roche.storage.set("date_battle_history", history);

        renderHistory(chatContainer, history, charName, userName);
      } catch(e) {
        console.error("AI 响应出错", e);
        roche.ui.toast("通信出错：" + (e.message || "请求失败") + "。进度已自动为您在本地保存，请稍后重发。");
        history.pop();
        await roche.storage.set("date_battle_history", history);
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

  // 游戏启动核心逻辑（内建错误拦截及 API 降级保障）
  async function startGame(container, roche, isResume) {
    try {
      let config = {};
      let history = [];

      if (isResume) {
        config = await roche.storage.get("date_battle_config");
        history = await roche.storage.get("date_battle_history") || [];
      } else {
        const userEl = document.getElementById("db-user-select");
        const charEl = document.getElementById("db-char-select");
        if (!userEl || !charEl) {
          throw new Error("界面元素丢失，请重新载入插件");
        }

        const userId = userEl.value;
        const charId = charEl.value;
        const worldType = document.getElementById("db-world-type").value.trim();
        const wordCount = parseInt(document.getElementById("db-world-count").value, 10) || 300;
        const worldIntro = document.getElementById("db-world-intro").value.trim();
        const userBg = document.getElementById("db-user-bg").value.trim();
        const charBg = document.getElementById("db-char-bg").value.trim();

        const selectedWbElements = document.querySelectorAll('input[name="db-wb-category"]:checked');
        const selectedWbs = Array.from(selectedWbElements).map(el => el.value);

        config = { userId, charId, worldType, wordCount, worldIntro, userBg, charBg, worldbooks: selectedWbs };
        history = [];

        await roche.storage.set("date_battle_config", config);
        await roche.storage.set("date_battle_history", []);
      }

      showLoading("正在加载角色设定并请求开局环境描述...");

      let userPersona = null;
      let character = null;

      // 双轨高容错加载：若 roche.character.get 缺失或报错，降级为使用列表轮询检索
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
        console.warn("常规加载角色出错，启动兜底机制...", e);
        const chars = await roche.character.list() || [];
        character = chars.find(c => c.id === config.charId);
      }

      if (!userPersona || !character) {
        throw new Error("人设或角色加载失败，请检查选中的数据是否有效");
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
            console.error(`世界书分类 ${catId} 获取异常`, e);
          }
        }
      }

      const systemPrompt = `
你是一个优秀的 TRPG 主持人（GM）兼角色扮演者。当前正在进行一场名为《约会大作战》的回合制文字恋爱冒险游戏。

【世界设定】
世界类型/画风: ${config.worldType}
场景起因与背景介绍: ${config.worldIntro || "一个令人期待的偶然邂逅"}
${worldbookText ? `\n【引入参考世界书设定数据】\n${worldbookText}` : ''}

【玩家信息 (User)】
姓名/昵称: ${userPersona.handle || userPersona.name || "玩家"}
玩家身份背景: ${config.userBg || "普通参与者"}
完整人设性格参考: ${userPersona.persona || userPersona.bio || "无"}

【对手角色信息 (Character)】
姓名/昵称: ${character.handle || character.name || "角色"}
对手身份背景: ${config.charBg || "攻略对象"}
完整人设性格参考: ${character.persona || character.bio || "无"}

【游戏核心规则】
1. 这是一场回合制互动。你负责扮演对手角色（${character.handle || character.name}）以及周围的世界环境（作为GM）。
2. 你的每一次回复必须高度符合该角色的性格特色、言行习惯，并切合当前的世界画风。
3. 每次回复的内容长度必须严格限制在 ${config.wordCount} 字以内（多用神态描摹和精准对白，精简叙事）。
4. 在回复中：你需要描述对方角色的动作、对话和心理活动，同时描绘环境的变化，最后留出空间等待玩家（User）采取下一步行动。
5. 绝不要替玩家（User）做出任何选择或擅自说出玩家的台词。
6. 保持绝对的角色沉浸，严禁跳戏，严禁提及你是AI或这只是程序。
`;

      if (history.length === 0) {
        const openingPrompt = "请开启《约会大作战》的第一回合。作为主持人和对手，描述我们当前所处的具体场景、你的出场状态、并向我（玩家）打个招呼作为开端，等待我的第一步自由行动。";
        try {
          const result = await roche.ai.chat({
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: openingPrompt }
            ]
          });

          const initialReply = result && (result.text || result.content);
          if (!initialReply) {
            throw new Error("AI 接口未返回有效文字，请确认 AI 设置已连接且可用");
          }

          history.push({ role: "user", content: openingPrompt });
          history.push({ role: "assistant", content: initialReply });
          await roche.storage.set("date_battle_history", history);
        } catch(e) {
          throw new Error("呼叫 AI 开启游戏失败，具体原因: " + (e.message || "请求超时"));
        }
      }

      hideLoading();
      renderGameView(container, roche, config, history, systemPrompt, character, userPersona);

    } catch (fatalError) {
      hideLoading();
      console.error("游戏启动致命异常:", fatalError);
      roche.ui.toast("启动大作战失败：" + fatalError.message);
    }
  }

  // 渲染设置视图
  async function renderSetupView(container, roche) {
    try {
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
          <div class="setup-container">
            <div class="setup-title">🌸 约会大作战 🌸</div>
            <div style="text-align: center; margin-top: 40px; color: var(--db-text-muted);">
              <p>⚠️ 未检测到可用的 User 人设 或 Character 角色。</p>
              <p style="font-size: 13px; margin-top: 10px;">请先在 Roche 宿主应用中创建至少一个“用户人设”和一个“角色”再来开始大作战吧！</p>
              <button class="btn btn-secondary" id="db-close-empty" style="margin: 20px auto 0; max-width: 200px;">退出插件</button>
            </div>
          </div>
        `;
        document.getElementById("db-close-empty").onclick = () => roche.ui.closeApp();
        return;
      }

      const cachedConfig = await roche.storage.get("date_battle_config") || {};
      const cachedHistory = await roche.storage.get("date_battle_history") || [];

      const wbHtml = worldbookCategories.map(cat => {
        const isChecked = (cachedConfig.worldbooks || []).includes(cat.id) ? "checked" : "";
        return `
          <label class="worldbook-item">
            <input type="checkbox" name="db-wb-category" value="${cat.id}" ${isChecked}>
            <span>${cat.name || cat.title || cat.id}</span>
          </label>
        `;
      }).join("") || `<span style="color: var(--db-text-muted); font-size:12px;">暂无可用世界书</span>`;

      setupDiv.innerHTML = `
        <div class="setup-container">
          <div class="setup-title">🌸 约会大作战 🌸</div>
          
          <div class="form-row">
            <div class="form-group">
              <label>选择你的 User 人设</label>
              <select id="db-user-select">
                ${users.map(u => `<option value="${u.id}" ${cachedConfig.userId === u.id ? 'selected' : ''}>${u.handle || u.name}</option>`).join("")}
              </select>
            </div>
            <div class="form-group">
              <label>选择攻略的 Character 角色</label>
              <select id="db-char-select">
                ${chars.map(c => `<option value="${c.id}" ${cachedConfig.charId === c.id ? 'selected' : ''}>${c.handle || c.name}</option>`).join("")}
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>世界类型/画风</label>
              <input type="text" id="db-world-type" placeholder="例如：赛博朋克、玄幻仙侠、现代校园恋爱" value="${cachedConfig.worldType || '现代校园恋爱'}">
            </div>
            <div class="form-group">
              <label>每回合 AI 生成字数上限</label>
              <input type="number" id="db-world-count" value="${cachedConfig.wordCount || 300}" min="50" max="800">
            </div>
          </div>

          <div class="form-group">
            <label>世界背景简介 (初始情境描述)</label>
            <textarea id="db-world-intro" placeholder="例如：我们在放学后的夕阳教室里，因为被反锁在内不得不共处一室...">${cachedConfig.worldIntro || ''}</textarea>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>你的身份背景与设定 (User)</label>
              <textarea id="db-user-bg" placeholder="在这个世界中，你的身份以及和对方的关系是什么？">${cachedConfig.userBg || ''}</textarea>
            </div>
            <div class="form-group">
              <label>对方的身份背景与设定 (Char)</label>
              <textarea id="db-char-bg" placeholder="在这个世界中，对方扮演什么角色？">${cachedConfig.charBg || ''}</textarea>
            </div>
          </div>

          <div class="form-group">
            <label>搭载宿主世界书 (可多选)</label>
            <div class="worldbook-list">
              ${wbHtml}
            </div>
          </div>

          <div class="btn-group">
            <button class="btn btn-secondary" id="db-exit-btn">退出</button>
            ${cachedHistory.length > 0 ? `<button class="btn btn-secondary" id="db-resume-btn">继续上次大作战</button>` : ''}
            <button class="btn btn-primary" id="db-start-btn">开启新的大作战 ✨</button>
          </div>
        </div>
      `;

      document.getElementById("db-exit-btn").onclick = () => roche.ui.closeApp();
      
      if (document.getElementById("db-resume-btn")) {
        document.getElementById("db-resume-btn").onclick = async () => {
          try {
            await startGame(container, roche, true);
          } catch (e) {
            roche.ui.toast("继续游戏异常: " + e.message);
          }
        };
      }

      document.getElementById("db-start-btn").onclick = async () => {
        try {
          if (cachedHistory.length > 0) {
            const override = await roche.ui.confirm({
              title: "覆盖进度？",
              message: "检测到您有未完成的游戏进度。开启新游戏将覆盖原进度，是否继续？"
            });
            if (!override) return;
          }
          await startGame(container, roche, false);
        } catch (e) {
          roche.ui.toast("启动大作战异常: " + e.message);
        }
      };

    } catch (setupError) {
      hideLoading();
      console.error("配置加载错误", setupError);
    }
  }

  // 注册插件
  window.RochePlugin.register({
    id: "date-battle",
    name: "约会大作战",
    version: "1.0.0",
    apps: [
      {
        id: "date-battle-app",
        name: "约会大作战",
        icon: "favorite",
        iconImage: "",
        async mount(container, roche) {
          injectStyles();
          container.innerHTML = `
            <div class="roche-plugin-date-battle">
              <div id="db-setup-view" class="db-view"></div>
              <div id="db-game-view" class="db-view" style="display: none;"></div>
              
              <!-- 加载遮罩 -->
              <div id="db-loading-overlay" class="db-overlay" style="display: none;">
                <div class="db-spinner"></div>
                <div id="db-loading-text">正在初始化世界...</div>
              </div>
            </div>
          `;
          await renderSetupView(container, roche);
        },
        async unmount(container, roche) {
          removeStyles();
          container.replaceChildren();
        }
      }
    ]
  });
})();