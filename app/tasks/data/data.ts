import { Ionicons } from '@expo/vector-icons';

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
]

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: 'help-circle-outline',
  },
  {
    value: "todo",
    label: "Todo",
    icon: 'ellipse-outline',
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: 'timer-outline',
  },
  {
    value: "done",
    label: "Done",
    icon: 'checkmark-circle-outline',
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: 'close-circle-outline',
  },
]

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: 'arrow-down-outline',
  },
  {
    label: "Medium",
    value: "medium",
    icon: 'arrow-forward-outline',
  },
  {
    label: "High",
    value: "high",
    icon: 'arrow-up-outline',
  },
]
