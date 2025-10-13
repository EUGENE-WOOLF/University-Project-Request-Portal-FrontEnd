type Project = {
  id: string;
  title: string;
  description?: string;
  professor?: string;
  status?: 'open' | 'assigned' | 'closed';
};

type Application = {
  id: string;
  projectId: string;
  student: string;
  status: 'pending' | 'accepted' | 'rejected';
  files?: string[]; // base64 or names for demo
};

const PROJECT_KEY = 'upr:projects';
const APP_KEY = 'upr:applications';

function read<T>(k: string): T[] {
  try {
    const raw = localStorage.getItem(k);
    if (!raw) return [];
    return JSON.parse(raw) as T[];
  } catch (e) {
    return [];
  }
}

function write<T>(k: string, v: T[]) {
  localStorage.setItem(k, JSON.stringify(v));
}

export const projectService = {
  list: (): Project[] => read<Project>(PROJECT_KEY),
  get: (id: string) => read<Project>(PROJECT_KEY).find((p) => p.id === id),
  create: (p: Project) => {
    const list = read<Project>(PROJECT_KEY);
    list.unshift(p);
    write(PROJECT_KEY, list);
    return p;
  },
  update: (id: string, patch: Partial<Project>) => {
    const list = read<Project>(PROJECT_KEY);
    const idx = list.findIndex((x) => x.id === id);
    if (idx === -1) return null;
    list[idx] = { ...list[idx], ...patch };
    write(PROJECT_KEY, list);
    return list[idx];
  },
};

export const applicationService = {
  list: (): Application[] => read<Application>(APP_KEY),
  create: (a: Application) => {
    const list = read<Application>(APP_KEY);
    list.unshift(a);
    write(APP_KEY, list);
    return a;
  },
  update: (id: string, patch: Partial<Application>) => {
    const list = read<Application>(APP_KEY);
    const idx = list.findIndex((x) => x.id === id);
    if (idx === -1) return null;
    list[idx] = { ...list[idx], ...patch };
    write(APP_KEY, list);
    return list[idx];
  },
};
