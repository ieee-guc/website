"use client"
import { createContext, useContext, useState, ReactNode } from 'react';
import { Committee } from '../types/committee.type';

interface CommitteesContextType {
    committees: Committee[];
    setCommittees: (committees: Committee[]) => void;
}

const CommitteesContext = createContext<CommitteesContextType>({
    committees: [],
    setCommittees: () => { },
});

export const CommitteesProvider = ({ children }: { children: ReactNode }) => {
    const [committees, setCommittees] = useState([]);

    return (
        <CommitteesContext.Provider value={{ committees, setCommittees }}>
            {children}
        </CommitteesContext.Provider>
    );
};

export const useCommittees = () => useContext(CommitteesContext);
