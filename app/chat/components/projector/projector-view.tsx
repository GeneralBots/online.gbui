import React from 'react';
import { View } from 'react-native';
import { VideoPlayer } from './video-player';
import { ImageViewer } from './image-viewer';
import { MarkdownViewer } from './markdown-viewer';
import { useChat } from '../../providers/chat-provider';
import { projectorStyles } from '../../styles/projector.styles';

export function ProjectorView() {
  const { line } = useChat();
  const [content, setContent] = React.useState<any>(null);

  React.useEffect(() => {
    if (!line) return;

    const subscription = line.activity$
      .filter(activity => activity.type === 'event' && activity.name === 'project')
      .subscribe(activity => {
        setContent(activity.value);
      });

    return () => subscription.unsubscribe();
  }, [line]);

  const renderContent = () => {
    if (!content) return null;

    switch (content.type) {
      case 'video':
        return <VideoPlayer url={content.url} />;
      case 'image':
        return <ImageViewer url={content.url} />;
      case 'markdown':
        return <MarkdownViewer content={content.text} />;
      default:
        return null;
    }
  };

  return (
    <View style={projectorStyles.container}>
      {renderContent()}
    </View>
  );
}
