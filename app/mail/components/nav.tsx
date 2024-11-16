import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LucideIcon } from 'lucide-react-native';

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: 'default' | 'ghost';
  }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
  return (
    <View style={[styles.container, isCollapsed && styles.collapsedContainer]}>
      <View style={styles.nav}>
        {links.map((link, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.link,
              isCollapsed ? styles.collapsedLink : styles.expandedLink,
              link.variant === 'default' ? styles.defaultVariant : styles.ghostVariant,
            ]}
            onPress={() => {/* Add navigation logic here */}}
          >
            <link.icon
              style={[
                styles.icon,
                isCollapsed ? styles.collapsedIcon : styles.expandedIcon,
              ]}
            />
            {!isCollapsed && (
              <>
                <Text style={styles.title}>{link.title}</Text>
                {link.label && (
                  <Text style={styles.label}>{link.label}</Text>
                )}
              </>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 16,
    paddingVertical: 8,
  },
  collapsedContainer: {
    paddingVertical: 8,
  },
  nav: {
    gap: 4,
    paddingHorizontal: 8,
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 4,
  },
  collapsedLink: {
    justifyContent: 'center',
    width: 36,
    height: 36,
  },
  expandedLink: {
    justifyContent: 'flex-start',
  },
  defaultVariant: {
    backgroundColor: '#f3f4f6',
  },
  ghostVariant: {
    backgroundColor: 'transparent',
  },
  icon: {
    width: 16,
    height: 16,
  },
  collapsedIcon: {
    marginRight: 0,
  },
  expandedIcon: {
    marginRight: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
  },
  label: {
    fontSize: 12,
    marginLeft: 'auto',
    color: '#6b7280',
  },
});
