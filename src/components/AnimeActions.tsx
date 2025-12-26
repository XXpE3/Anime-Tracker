import { ActionPanel, Action, Icon } from "@raycast/api";

interface AnimeActionsProps {
  onBrowserPikpak: () => void;
  onDownload: () => void;
  onCopy: () => void;
  onStage?: () => void;
  onUnstage?: () => void;
  onCopyAll: () => void;
  isStaged: boolean;
  stagedCount: number;
}

/**
 * 共享的动漫操作面板组件
 * 提供统一的操作按钮布局
 */
export function AnimeActions({
  onBrowserPikpak,
  onDownload,
  onCopy,
  onStage,
  onUnstage,
  onCopyAll,
  isStaged,
  stagedCount,
}: Readonly<AnimeActionsProps>) {
  return (
    <ActionPanel>
      {isStaged ? (
        // 暂存项目的操作
        <>
          <ActionPanel.Section title="暂存操作">
            <Action
              title={stagedCount > 0 ? `复制全部 ${stagedCount} 个磁力链` : "复制全部磁力链"}
              icon={Icon.Clipboard}
              shortcut={{ modifiers: ["cmd", "shift"], key: "c" }}
              onAction={onCopyAll}
            />
            {onUnstage && (
              <Action
                title="从暂存移除"
                icon={Icon.Minus}
                shortcut={{ modifiers: ["cmd"], key: "d" }}
                onAction={onUnstage}
              />
            )}
          </ActionPanel.Section>
          <ActionPanel.Section title="单项操作">
            <Action title="Chrome / PikPak 播放" icon={Icon.Globe} onAction={onBrowserPikpak} />
            <Action title="本地下载" icon={Icon.Download} onAction={onDownload} />
            <Action title="复制磁力链" icon={Icon.Clipboard} onAction={onCopy} />
          </ActionPanel.Section>
        </>
      ) : (
        // 普通项目的操作
        <>
          <ActionPanel.Section title="推荐操作">
            <Action title="Chrome / PikPak 播放" icon={Icon.Globe} onAction={onBrowserPikpak} />
            {onStage && (
              <Action
                title="加入暂存"
                icon={Icon.Plus}
                shortcut={{ modifiers: ["cmd"], key: "s" }}
                onAction={onStage}
              />
            )}
          </ActionPanel.Section>
          <ActionPanel.Section title="其他">
            <Action title="本地下载" icon={Icon.Download} onAction={onDownload} />
            <Action title="复制磁力链" icon={Icon.Clipboard} onAction={onCopy} />
          </ActionPanel.Section>
          <ActionPanel.Section title="暂存">
            <Action
              title={stagedCount > 0 ? `复制全部 ${stagedCount} 个磁力链` : "复制全部磁力链"}
              icon={Icon.Clipboard}
              shortcut={{ modifiers: ["cmd", "shift"], key: "c" }}
              onAction={onCopyAll}
            />
          </ActionPanel.Section>
        </>
      )}
    </ActionPanel>
  );
}
