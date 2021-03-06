import { StaticServer } from './schema';

/**
 * The type of link to generate.
 */
export type LinkType = 'commit' | 'branch' | 'defaultBranch';

/**
 * Information about a Git repository.
 */
export interface Repository {
    /**
     * The root directory of the repository.
     */
    readonly root: string;

    /**
     * The URL to the default remote, or `undefined` if the repository has no remotes.
     */
    readonly remote: Remote | undefined;
}

/**
 * Information about a Git repository that has a remote.
 */
export type RepositoryWithRemote = Omit<Repository, 'remote'> & {
    /**
     * The URL of the default remote.
     */
    readonly remote: Remote;
};

/**
 * A Git remote.
 */
export interface Remote {
    /**
     * The name of the remote.
     */
    readonly name: string;

    /**
     * The URL of the remote.
     */
    readonly url: string;
}

/**
 * Defines a selected range in a file.
 */
export interface SelectedRange {
    /**
     * The one-based line number that the selection starts at.
     */
    readonly startLine: number;

    /**
     * The one-based line number that the selection ends at.
     */
    readonly endLine: number;

    /**
     * The one-based column number that the selection starts at.
     */
    readonly startColumn: number;

    /**
     * The one-based column number that the selection ends at.
     */
    readonly endColumn: number;
}

/**
 * Options for generating a link.
 */
export interface LinkOptions {
    /**
     * The type of link to create.
     *
     * A value of `undefined` means the default link type should be used.
     */
    readonly type: LinkType | undefined;
}

/**
 * Information about a file.
 */
export interface FileInfo {
    /**
     * The path of the file from the root of the repository.
     */
    filePath: string;

    /**
     * The selected range in the file.
     */
    selection?: SelectedRange;
}

/**
 * Information about a URL.
 */
export interface UrlInfo {
    /**
     * The path of the file from the root of the repository.
     */
    filePath: string;

    /**
     * The server URLs determined from the URL.
     */
    server: StaticServer;

    /**
     * The selected range in the file.
     */
    selection: Partial<SelectedRange>;
}
