import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export type Maybe<T> = T extends PromiseLike<infer U>
  ? Promise<U | undefined>
  : T | undefined
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type BooleanQueryOperatorInput = {
  eq: Maybe<Scalars['Boolean']>
  ne: Maybe<Scalars['Boolean']>
  in: Maybe<Array<Maybe<Scalars['Boolean']>>>
  nin: Maybe<Array<Maybe<Scalars['Boolean']>>>
}

export type DateQueryOperatorInput = {
  eq: Maybe<Scalars['Date']>
  ne: Maybe<Scalars['Date']>
  gt: Maybe<Scalars['Date']>
  gte: Maybe<Scalars['Date']>
  lt: Maybe<Scalars['Date']>
  lte: Maybe<Scalars['Date']>
  in: Maybe<Array<Maybe<Scalars['Date']>>>
  nin: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type Directory = Node & {
  __typename?: 'Directory'
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>
  blksize: Maybe<Scalars['Int']>
  blocks: Maybe<Scalars['Int']>
  id: Scalars['ID']
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type DirectoryModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type DirectoryAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection'
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<DirectoryGroupConnection>
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge'
  next: Maybe<Directory>
  node: Directory
  previous: Maybe<Directory>
}

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type DirectoryFilterInput = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>
  absolutePath: Maybe<StringQueryOperatorInput>
  relativePath: Maybe<StringQueryOperatorInput>
  extension: Maybe<StringQueryOperatorInput>
  size: Maybe<IntQueryOperatorInput>
  prettySize: Maybe<StringQueryOperatorInput>
  modifiedTime: Maybe<DateQueryOperatorInput>
  accessTime: Maybe<DateQueryOperatorInput>
  changeTime: Maybe<DateQueryOperatorInput>
  birthTime: Maybe<DateQueryOperatorInput>
  root: Maybe<StringQueryOperatorInput>
  dir: Maybe<StringQueryOperatorInput>
  base: Maybe<StringQueryOperatorInput>
  ext: Maybe<StringQueryOperatorInput>
  name: Maybe<StringQueryOperatorInput>
  relativeDirectory: Maybe<StringQueryOperatorInput>
  dev: Maybe<IntQueryOperatorInput>
  mode: Maybe<IntQueryOperatorInput>
  nlink: Maybe<IntQueryOperatorInput>
  uid: Maybe<IntQueryOperatorInput>
  gid: Maybe<IntQueryOperatorInput>
  rdev: Maybe<IntQueryOperatorInput>
  ino: Maybe<FloatQueryOperatorInput>
  atimeMs: Maybe<FloatQueryOperatorInput>
  mtimeMs: Maybe<FloatQueryOperatorInput>
  ctimeMs: Maybe<FloatQueryOperatorInput>
  atime: Maybe<DateQueryOperatorInput>
  mtime: Maybe<DateQueryOperatorInput>
  ctime: Maybe<DateQueryOperatorInput>
  birthtime: Maybe<DateQueryOperatorInput>
  birthtimeMs: Maybe<FloatQueryOperatorInput>
  blksize: Maybe<IntQueryOperatorInput>
  blocks: Maybe<IntQueryOperatorInput>
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
}

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
}

export type DirectorySortInput = {
  fields: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
  order: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type DuotoneGradient = {
  highlight: Scalars['String']
  shadow: Scalars['String']
  opacity: Maybe<Scalars['Int']>
}

export type File = Node & {
  __typename?: 'File'
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>
  blksize: Maybe<Scalars['Int']>
  blocks: Maybe<Scalars['Int']>
  /** Copy file to static directory and return public url to it */
  publicURL: Maybe<Scalars['String']>
  childImageSharp: Maybe<ImageSharp>
  id: Scalars['ID']
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type FileModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type FileAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type FileAtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type FileMtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type FileCtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type FileConnection = {
  __typename?: 'FileConnection'
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<FileGroupConnection>
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: FileFieldsEnum
}

export type FileEdge = {
  __typename?: 'FileEdge'
  next: Maybe<File>
  node: File
  previous: Maybe<File>
}

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  PublicUrl = 'publicURL',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type FileFilterInput = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>
  absolutePath: Maybe<StringQueryOperatorInput>
  relativePath: Maybe<StringQueryOperatorInput>
  extension: Maybe<StringQueryOperatorInput>
  size: Maybe<IntQueryOperatorInput>
  prettySize: Maybe<StringQueryOperatorInput>
  modifiedTime: Maybe<DateQueryOperatorInput>
  accessTime: Maybe<DateQueryOperatorInput>
  changeTime: Maybe<DateQueryOperatorInput>
  birthTime: Maybe<DateQueryOperatorInput>
  root: Maybe<StringQueryOperatorInput>
  dir: Maybe<StringQueryOperatorInput>
  base: Maybe<StringQueryOperatorInput>
  ext: Maybe<StringQueryOperatorInput>
  name: Maybe<StringQueryOperatorInput>
  relativeDirectory: Maybe<StringQueryOperatorInput>
  dev: Maybe<IntQueryOperatorInput>
  mode: Maybe<IntQueryOperatorInput>
  nlink: Maybe<IntQueryOperatorInput>
  uid: Maybe<IntQueryOperatorInput>
  gid: Maybe<IntQueryOperatorInput>
  rdev: Maybe<IntQueryOperatorInput>
  ino: Maybe<FloatQueryOperatorInput>
  atimeMs: Maybe<FloatQueryOperatorInput>
  mtimeMs: Maybe<FloatQueryOperatorInput>
  ctimeMs: Maybe<FloatQueryOperatorInput>
  atime: Maybe<DateQueryOperatorInput>
  mtime: Maybe<DateQueryOperatorInput>
  ctime: Maybe<DateQueryOperatorInput>
  birthtime: Maybe<DateQueryOperatorInput>
  birthtimeMs: Maybe<FloatQueryOperatorInput>
  blksize: Maybe<IntQueryOperatorInput>
  blocks: Maybe<IntQueryOperatorInput>
  publicURL: Maybe<StringQueryOperatorInput>
  childImageSharp: Maybe<ImageSharpFilterInput>
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
}

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
}

export type FileSortInput = {
  fields: Maybe<Array<Maybe<FileFieldsEnum>>>
  order: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
  eq: Maybe<Scalars['Float']>
  ne: Maybe<Scalars['Float']>
  gt: Maybe<Scalars['Float']>
  gte: Maybe<Scalars['Float']>
  lt: Maybe<Scalars['Float']>
  lte: Maybe<Scalars['Float']>
  in: Maybe<Array<Maybe<Scalars['Float']>>>
  nin: Maybe<Array<Maybe<Scalars['Float']>>>
}

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION',
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE',
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp'
  fixed: Maybe<ImageSharpFixed>
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions: Maybe<ImageSharpResolutions>
  fluid: Maybe<ImageSharpFluid>
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes: Maybe<ImageSharpSizes>
  original: Maybe<ImageSharpOriginal>
  resize: Maybe<ImageSharpResize>
  id: Scalars['ID']
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type ImageSharpFixedArgs = {
  width: Maybe<Scalars['Int']>
  height: Maybe<Scalars['Int']>
  base64Width: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone: Maybe<DuotoneGradient>
  traceSVG: Maybe<Potrace>
  quality: Maybe<Scalars['Int']>
  jpegQuality: Maybe<Scalars['Int']>
  pngQuality: Maybe<Scalars['Int']>
  webpQuality: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpResolutionsArgs = {
  width: Maybe<Scalars['Int']>
  height: Maybe<Scalars['Int']>
  base64Width: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone: Maybe<DuotoneGradient>
  traceSVG: Maybe<Potrace>
  quality: Maybe<Scalars['Int']>
  jpegQuality: Maybe<Scalars['Int']>
  pngQuality: Maybe<Scalars['Int']>
  webpQuality: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpFluidArgs = {
  maxWidth: Maybe<Scalars['Int']>
  maxHeight: Maybe<Scalars['Int']>
  base64Width: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  duotone: Maybe<DuotoneGradient>
  traceSVG: Maybe<Potrace>
  quality: Maybe<Scalars['Int']>
  jpegQuality: Maybe<Scalars['Int']>
  pngQuality: Maybe<Scalars['Int']>
  webpQuality: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  sizes?: Maybe<Scalars['String']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type ImageSharpSizesArgs = {
  maxWidth: Maybe<Scalars['Int']>
  maxHeight: Maybe<Scalars['Int']>
  base64Width: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  duotone: Maybe<DuotoneGradient>
  traceSVG: Maybe<Potrace>
  quality: Maybe<Scalars['Int']>
  jpegQuality: Maybe<Scalars['Int']>
  pngQuality: Maybe<Scalars['Int']>
  webpQuality: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  sizes?: Maybe<Scalars['String']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type ImageSharpResizeArgs = {
  width: Maybe<Scalars['Int']>
  height: Maybe<Scalars['Int']>
  quality: Maybe<Scalars['Int']>
  jpegQuality: Maybe<Scalars['Int']>
  pngQuality: Maybe<Scalars['Int']>
  webpQuality: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionLevel?: Maybe<Scalars['Int']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone: Maybe<DuotoneGradient>
  base64?: Maybe<Scalars['Boolean']>
  traceSVG: Maybe<Potrace>
  toFormat?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection'
  totalCount: Scalars['Int']
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ImageSharpGroupConnection>
}

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: ImageSharpFieldsEnum
}

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge'
  next: Maybe<ImageSharp>
  node: ImageSharp
  previous: Maybe<ImageSharp>
}

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type ImageSharpFilterInput = {
  fixed: Maybe<ImageSharpFixedFilterInput>
  resolutions: Maybe<ImageSharpResolutionsFilterInput>
  fluid: Maybe<ImageSharpFluidFilterInput>
  sizes: Maybe<ImageSharpSizesFilterInput>
  original: Maybe<ImageSharpOriginalFilterInput>
  resize: Maybe<ImageSharpResizeFilterInput>
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
}

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed'
  base64: Maybe<Scalars['String']>
  tracedSVG: Maybe<Scalars['String']>
  aspectRatio: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp: Maybe<Scalars['String']>
  srcSetWebp: Maybe<Scalars['String']>
  originalName: Maybe<Scalars['String']>
}

export type ImageSharpFixedFilterInput = {
  base64: Maybe<StringQueryOperatorInput>
  tracedSVG: Maybe<StringQueryOperatorInput>
  aspectRatio: Maybe<FloatQueryOperatorInput>
  width: Maybe<FloatQueryOperatorInput>
  height: Maybe<FloatQueryOperatorInput>
  src: Maybe<StringQueryOperatorInput>
  srcSet: Maybe<StringQueryOperatorInput>
  srcWebp: Maybe<StringQueryOperatorInput>
  srcSetWebp: Maybe<StringQueryOperatorInput>
  originalName: Maybe<StringQueryOperatorInput>
}

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid'
  base64: Maybe<Scalars['String']>
  tracedSVG: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp: Maybe<Scalars['String']>
  srcSetWebp: Maybe<Scalars['String']>
  sizes: Scalars['String']
  originalImg: Maybe<Scalars['String']>
  originalName: Maybe<Scalars['String']>
  presentationWidth: Scalars['Int']
  presentationHeight: Scalars['Int']
}

export type ImageSharpFluidFilterInput = {
  base64: Maybe<StringQueryOperatorInput>
  tracedSVG: Maybe<StringQueryOperatorInput>
  aspectRatio: Maybe<FloatQueryOperatorInput>
  src: Maybe<StringQueryOperatorInput>
  srcSet: Maybe<StringQueryOperatorInput>
  srcWebp: Maybe<StringQueryOperatorInput>
  srcSetWebp: Maybe<StringQueryOperatorInput>
  sizes: Maybe<StringQueryOperatorInput>
  originalImg: Maybe<StringQueryOperatorInput>
  originalName: Maybe<StringQueryOperatorInput>
  presentationWidth: Maybe<IntQueryOperatorInput>
  presentationHeight: Maybe<IntQueryOperatorInput>
}

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
}

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal'
  width: Maybe<Scalars['Float']>
  height: Maybe<Scalars['Float']>
  src: Maybe<Scalars['String']>
}

export type ImageSharpOriginalFilterInput = {
  width: Maybe<FloatQueryOperatorInput>
  height: Maybe<FloatQueryOperatorInput>
  src: Maybe<StringQueryOperatorInput>
}

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize'
  src: Maybe<Scalars['String']>
  tracedSVG: Maybe<Scalars['String']>
  width: Maybe<Scalars['Int']>
  height: Maybe<Scalars['Int']>
  aspectRatio: Maybe<Scalars['Float']>
  originalName: Maybe<Scalars['String']>
}

export type ImageSharpResizeFilterInput = {
  src: Maybe<StringQueryOperatorInput>
  tracedSVG: Maybe<StringQueryOperatorInput>
  width: Maybe<IntQueryOperatorInput>
  height: Maybe<IntQueryOperatorInput>
  aspectRatio: Maybe<FloatQueryOperatorInput>
  originalName: Maybe<StringQueryOperatorInput>
}

export type ImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions'
  base64: Maybe<Scalars['String']>
  tracedSVG: Maybe<Scalars['String']>
  aspectRatio: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp: Maybe<Scalars['String']>
  srcSetWebp: Maybe<Scalars['String']>
  originalName: Maybe<Scalars['String']>
}

export type ImageSharpResolutionsFilterInput = {
  base64: Maybe<StringQueryOperatorInput>
  tracedSVG: Maybe<StringQueryOperatorInput>
  aspectRatio: Maybe<FloatQueryOperatorInput>
  width: Maybe<FloatQueryOperatorInput>
  height: Maybe<FloatQueryOperatorInput>
  src: Maybe<StringQueryOperatorInput>
  srcSet: Maybe<StringQueryOperatorInput>
  srcWebp: Maybe<StringQueryOperatorInput>
  srcSetWebp: Maybe<StringQueryOperatorInput>
  originalName: Maybe<StringQueryOperatorInput>
}

export type ImageSharpSizes = {
  __typename?: 'ImageSharpSizes'
  base64: Maybe<Scalars['String']>
  tracedSVG: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp: Maybe<Scalars['String']>
  srcSetWebp: Maybe<Scalars['String']>
  sizes: Scalars['String']
  originalImg: Maybe<Scalars['String']>
  originalName: Maybe<Scalars['String']>
  presentationWidth: Scalars['Int']
  presentationHeight: Scalars['Int']
}

export type ImageSharpSizesFilterInput = {
  base64: Maybe<StringQueryOperatorInput>
  tracedSVG: Maybe<StringQueryOperatorInput>
  aspectRatio: Maybe<FloatQueryOperatorInput>
  src: Maybe<StringQueryOperatorInput>
  srcSet: Maybe<StringQueryOperatorInput>
  srcWebp: Maybe<StringQueryOperatorInput>
  srcSetWebp: Maybe<StringQueryOperatorInput>
  sizes: Maybe<StringQueryOperatorInput>
  originalImg: Maybe<StringQueryOperatorInput>
  originalName: Maybe<StringQueryOperatorInput>
  presentationWidth: Maybe<IntQueryOperatorInput>
  presentationHeight: Maybe<IntQueryOperatorInput>
}

export type ImageSharpSortInput = {
  fields: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>
  order: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type Internal = {
  __typename?: 'Internal'
  content: Maybe<Scalars['String']>
  contentDigest: Scalars['String']
  description: Maybe<Scalars['String']>
  fieldOwners: Maybe<Array<Maybe<Scalars['String']>>>
  ignoreType: Maybe<Scalars['Boolean']>
  mediaType: Maybe<Scalars['String']>
  owner: Scalars['String']
  type: Scalars['String']
}

export type InternalFilterInput = {
  content: Maybe<StringQueryOperatorInput>
  contentDigest: Maybe<StringQueryOperatorInput>
  description: Maybe<StringQueryOperatorInput>
  fieldOwners: Maybe<StringQueryOperatorInput>
  ignoreType: Maybe<BooleanQueryOperatorInput>
  mediaType: Maybe<StringQueryOperatorInput>
  owner: Maybe<StringQueryOperatorInput>
  type: Maybe<StringQueryOperatorInput>
}

export type IntQueryOperatorInput = {
  eq: Maybe<Scalars['Int']>
  ne: Maybe<Scalars['Int']>
  gt: Maybe<Scalars['Int']>
  gte: Maybe<Scalars['Int']>
  lt: Maybe<Scalars['Int']>
  lte: Maybe<Scalars['Int']>
  in: Maybe<Array<Maybe<Scalars['Int']>>>
  nin: Maybe<Array<Maybe<Scalars['Int']>>>
}

/** Node Interface */
export type Node = {
  id: Scalars['ID']
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type NodeFilterInput = {
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  elemMatch: Maybe<NodeFilterInput>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  currentPage: Scalars['Int']
  hasPreviousPage: Scalars['Boolean']
  hasNextPage: Scalars['Boolean']
  itemCount: Scalars['Int']
  pageCount: Scalars['Int']
  perPage: Maybe<Scalars['Int']>
  totalCount: Scalars['Int']
}

export type Potrace = {
  turnPolicy: Maybe<PotraceTurnPolicy>
  turdSize: Maybe<Scalars['Float']>
  alphaMax: Maybe<Scalars['Float']>
  optCurve: Maybe<Scalars['Boolean']>
  optTolerance: Maybe<Scalars['Float']>
  threshold: Maybe<Scalars['Int']>
  blackOnWhite: Maybe<Scalars['Boolean']>
  color: Maybe<Scalars['String']>
  background: Maybe<Scalars['String']>
}

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
}

export type Query = {
  __typename?: 'Query'
  file: Maybe<File>
  allFile: FileConnection
  directory: Maybe<Directory>
  allDirectory: DirectoryConnection
  site: Maybe<Site>
  allSite: SiteConnection
  sitePage: Maybe<SitePage>
  allSitePage: SitePageConnection
  imageSharp: Maybe<ImageSharp>
  allImageSharp: ImageSharpConnection
  siteBuildMetadata: Maybe<SiteBuildMetadata>
  allSiteBuildMetadata: SiteBuildMetadataConnection
  sitePlugin: Maybe<SitePlugin>
  allSitePlugin: SitePluginConnection
}

export type QueryFileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>
  absolutePath: Maybe<StringQueryOperatorInput>
  relativePath: Maybe<StringQueryOperatorInput>
  extension: Maybe<StringQueryOperatorInput>
  size: Maybe<IntQueryOperatorInput>
  prettySize: Maybe<StringQueryOperatorInput>
  modifiedTime: Maybe<DateQueryOperatorInput>
  accessTime: Maybe<DateQueryOperatorInput>
  changeTime: Maybe<DateQueryOperatorInput>
  birthTime: Maybe<DateQueryOperatorInput>
  root: Maybe<StringQueryOperatorInput>
  dir: Maybe<StringQueryOperatorInput>
  base: Maybe<StringQueryOperatorInput>
  ext: Maybe<StringQueryOperatorInput>
  name: Maybe<StringQueryOperatorInput>
  relativeDirectory: Maybe<StringQueryOperatorInput>
  dev: Maybe<IntQueryOperatorInput>
  mode: Maybe<IntQueryOperatorInput>
  nlink: Maybe<IntQueryOperatorInput>
  uid: Maybe<IntQueryOperatorInput>
  gid: Maybe<IntQueryOperatorInput>
  rdev: Maybe<IntQueryOperatorInput>
  ino: Maybe<FloatQueryOperatorInput>
  atimeMs: Maybe<FloatQueryOperatorInput>
  mtimeMs: Maybe<FloatQueryOperatorInput>
  ctimeMs: Maybe<FloatQueryOperatorInput>
  atime: Maybe<DateQueryOperatorInput>
  mtime: Maybe<DateQueryOperatorInput>
  ctime: Maybe<DateQueryOperatorInput>
  birthtime: Maybe<DateQueryOperatorInput>
  birthtimeMs: Maybe<FloatQueryOperatorInput>
  blksize: Maybe<IntQueryOperatorInput>
  blocks: Maybe<IntQueryOperatorInput>
  publicURL: Maybe<StringQueryOperatorInput>
  childImageSharp: Maybe<ImageSharpFilterInput>
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
}

export type QueryAllFileArgs = {
  filter: Maybe<FileFilterInput>
  sort: Maybe<FileSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type QueryDirectoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>
  absolutePath: Maybe<StringQueryOperatorInput>
  relativePath: Maybe<StringQueryOperatorInput>
  extension: Maybe<StringQueryOperatorInput>
  size: Maybe<IntQueryOperatorInput>
  prettySize: Maybe<StringQueryOperatorInput>
  modifiedTime: Maybe<DateQueryOperatorInput>
  accessTime: Maybe<DateQueryOperatorInput>
  changeTime: Maybe<DateQueryOperatorInput>
  birthTime: Maybe<DateQueryOperatorInput>
  root: Maybe<StringQueryOperatorInput>
  dir: Maybe<StringQueryOperatorInput>
  base: Maybe<StringQueryOperatorInput>
  ext: Maybe<StringQueryOperatorInput>
  name: Maybe<StringQueryOperatorInput>
  relativeDirectory: Maybe<StringQueryOperatorInput>
  dev: Maybe<IntQueryOperatorInput>
  mode: Maybe<IntQueryOperatorInput>
  nlink: Maybe<IntQueryOperatorInput>
  uid: Maybe<IntQueryOperatorInput>
  gid: Maybe<IntQueryOperatorInput>
  rdev: Maybe<IntQueryOperatorInput>
  ino: Maybe<FloatQueryOperatorInput>
  atimeMs: Maybe<FloatQueryOperatorInput>
  mtimeMs: Maybe<FloatQueryOperatorInput>
  ctimeMs: Maybe<FloatQueryOperatorInput>
  atime: Maybe<DateQueryOperatorInput>
  mtime: Maybe<DateQueryOperatorInput>
  ctime: Maybe<DateQueryOperatorInput>
  birthtime: Maybe<DateQueryOperatorInput>
  birthtimeMs: Maybe<FloatQueryOperatorInput>
  blksize: Maybe<IntQueryOperatorInput>
  blocks: Maybe<IntQueryOperatorInput>
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
}

export type QueryAllDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>
  sort: Maybe<DirectorySortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type QuerySiteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>
  port: Maybe<IntQueryOperatorInput>
  host: Maybe<StringQueryOperatorInput>
  polyfill: Maybe<BooleanQueryOperatorInput>
  pathPrefix: Maybe<StringQueryOperatorInput>
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
}

export type QueryAllSiteArgs = {
  filter: Maybe<SiteFilterInput>
  sort: Maybe<SiteSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type QuerySitePageArgs = {
  path: Maybe<StringQueryOperatorInput>
  component: Maybe<StringQueryOperatorInput>
  internalComponentName: Maybe<StringQueryOperatorInput>
  componentChunkName: Maybe<StringQueryOperatorInput>
  matchPath: Maybe<StringQueryOperatorInput>
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>
  pluginCreator: Maybe<SitePluginFilterInput>
  pluginCreatorId: Maybe<StringQueryOperatorInput>
  componentPath: Maybe<StringQueryOperatorInput>
}

export type QueryAllSitePageArgs = {
  filter: Maybe<SitePageFilterInput>
  sort: Maybe<SitePageSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type QueryImageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>
  resolutions: Maybe<ImageSharpResolutionsFilterInput>
  fluid: Maybe<ImageSharpFluidFilterInput>
  sizes: Maybe<ImageSharpSizesFilterInput>
  original: Maybe<ImageSharpOriginalFilterInput>
  resize: Maybe<ImageSharpResizeFilterInput>
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
}

export type QueryAllImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>
  sort: Maybe<ImageSharpSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type QuerySiteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
  buildTime: Maybe<DateQueryOperatorInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>
  sort: Maybe<SiteBuildMetadataSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type QuerySitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
  resolve: Maybe<StringQueryOperatorInput>
  name: Maybe<StringQueryOperatorInput>
  version: Maybe<StringQueryOperatorInput>
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs: Maybe<StringQueryOperatorInput>
  browserAPIs: Maybe<StringQueryOperatorInput>
  ssrAPIs: Maybe<StringQueryOperatorInput>
  pluginFilepath: Maybe<StringQueryOperatorInput>
  packageJson: Maybe<SitePluginPackageJsonFilterInput>
}

export type QueryAllSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>
  sort: Maybe<SitePluginSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type Site = Node & {
  __typename?: 'Site'
  buildTime: Maybe<Scalars['Date']>
  siteMetadata: Maybe<SiteSiteMetadata>
  port: Maybe<Scalars['Int']>
  host: Maybe<Scalars['String']>
  polyfill: Maybe<Scalars['Boolean']>
  pathPrefix: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata'
  id: Scalars['ID']
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
  buildTime: Maybe<Scalars['Date']>
}

export type SiteBuildMetadataBuildTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SiteBuildMetadataGroupConnection>
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge'
  next: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous: Maybe<SiteBuildMetadata>
}

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime',
}

export type SiteBuildMetadataFilterInput = {
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
  buildTime: Maybe<DateQueryOperatorInput>
}

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
}

export type SiteBuildMetadataSortInput = {
  fields: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
  order: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteConnection = {
  __typename?: 'SiteConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: SiteFieldsEnum
}

export type SiteEdge = {
  __typename?: 'SiteEdge'
  next: Maybe<Site>
  node: Site
  previous: Maybe<Site>
}

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataAuthor = 'siteMetadata___author',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type SiteFilterInput = {
  buildTime: Maybe<DateQueryOperatorInput>
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>
  port: Maybe<IntQueryOperatorInput>
  host: Maybe<StringQueryOperatorInput>
  polyfill: Maybe<BooleanQueryOperatorInput>
  pathPrefix: Maybe<StringQueryOperatorInput>
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
}

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
}

export type SitePage = Node & {
  __typename?: 'SitePage'
  path: Scalars['String']
  component: Scalars['String']
  internalComponentName: Scalars['String']
  componentChunkName: Scalars['String']
  matchPath: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
  isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>
  pluginCreator: Maybe<SitePlugin>
  pluginCreatorId: Maybe<Scalars['String']>
  componentPath: Maybe<Scalars['String']>
}

export type SitePageConnection = {
  __typename?: 'SitePageConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: SitePageFieldsEnum
}

export type SitePageEdge = {
  __typename?: 'SitePageEdge'
  next: Maybe<SitePage>
  node: SitePage
  previous: Maybe<SitePage>
}

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
  PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
  PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
  PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
  PluginCreatorPluginOptionsCacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
  PluginCreatorPluginOptionsAliasComponents = 'pluginCreator___pluginOptions___alias____components',
  PluginCreatorPluginOptionsAliasImages = 'pluginCreator___pluginOptions___alias____images',
  PluginCreatorPluginOptionsAliasLayouts = 'pluginCreator___pluginOptions___alias____layouts',
  PluginCreatorPluginOptionsAliasPages = 'pluginCreator___pluginOptions___alias____pages',
  PluginCreatorPluginOptionsAliasHooks = 'pluginCreator___pluginOptions___alias____hooks',
  PluginCreatorPluginOptionsAliasContext = 'pluginCreator___pluginOptions___alias____context',
  PluginCreatorPluginOptionsAliasTheme = 'pluginCreator___pluginOptions___alias____theme',
  PluginCreatorPluginOptionsAliasGenerated = 'pluginCreator___pluginOptions___alias____generated',
  PluginCreatorPluginOptionsAliasUtils = 'pluginCreator___pluginOptions___alias____utils',
  PluginCreatorPluginOptionsAliasScreens = 'pluginCreator___pluginOptions___alias____screens',
  PluginCreatorPluginOptionsExtensions = 'pluginCreator___pluginOptions___extensions',
  PluginCreatorPluginOptionsComponent = 'pluginCreator___pluginOptions___component',
  PluginCreatorPluginOptionsFonts = 'pluginCreator___pluginOptions___fonts',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
}

export type SitePageFilterInput = {
  path: Maybe<StringQueryOperatorInput>
  component: Maybe<StringQueryOperatorInput>
  internalComponentName: Maybe<StringQueryOperatorInput>
  componentChunkName: Maybe<StringQueryOperatorInput>
  matchPath: Maybe<StringQueryOperatorInput>
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>
  pluginCreator: Maybe<SitePluginFilterInput>
  pluginCreatorId: Maybe<StringQueryOperatorInput>
  componentPath: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
}

export type SitePageSortInput = {
  fields: Maybe<Array<Maybe<SitePageFieldsEnum>>>
  order: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  __typename?: 'SitePlugin'
  id: Scalars['ID']
  parent: Maybe<Node>
  children: Array<Node>
  internal: Internal
  resolve: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  version: Maybe<Scalars['String']>
  pluginOptions: Maybe<SitePluginPluginOptions>
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>
  ssrAPIs: Maybe<Array<Maybe<Scalars['String']>>>
  pluginFilepath: Maybe<Scalars['String']>
  packageJson: Maybe<SitePluginPackageJson>
}

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge'
  next: Maybe<SitePlugin>
  node: SitePlugin
  previous: Maybe<SitePlugin>
}

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsCacheDigest = 'pluginOptions___cacheDigest',
  PluginOptionsAliasComponents = 'pluginOptions___alias____components',
  PluginOptionsAliasImages = 'pluginOptions___alias____images',
  PluginOptionsAliasLayouts = 'pluginOptions___alias____layouts',
  PluginOptionsAliasPages = 'pluginOptions___alias____pages',
  PluginOptionsAliasHooks = 'pluginOptions___alias____hooks',
  PluginOptionsAliasContext = 'pluginOptions___alias____context',
  PluginOptionsAliasTheme = 'pluginOptions___alias____theme',
  PluginOptionsAliasGenerated = 'pluginOptions___alias____generated',
  PluginOptionsAliasUtils = 'pluginOptions___alias____utils',
  PluginOptionsAliasScreens = 'pluginOptions___alias____screens',
  PluginOptionsExtensions = 'pluginOptions___extensions',
  PluginOptionsComponent = 'pluginOptions___component',
  PluginOptionsFonts = 'pluginOptions___fonts',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
}

export type SitePluginFilterInput = {
  id: Maybe<StringQueryOperatorInput>
  parent: Maybe<NodeFilterInput>
  children: Maybe<NodeFilterListInput>
  internal: Maybe<InternalFilterInput>
  resolve: Maybe<StringQueryOperatorInput>
  name: Maybe<StringQueryOperatorInput>
  version: Maybe<StringQueryOperatorInput>
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs: Maybe<StringQueryOperatorInput>
  browserAPIs: Maybe<StringQueryOperatorInput>
  ssrAPIs: Maybe<StringQueryOperatorInput>
  pluginFilepath: Maybe<StringQueryOperatorInput>
  packageJson: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue: Maybe<Scalars['String']>
}

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson'
  name: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  version: Maybe<Scalars['String']>
  main: Maybe<Scalars['String']>
  author: Maybe<Scalars['String']>
  license: Maybe<Scalars['String']>
  dependencies: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
  devDependencies: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
  peerDependencies: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
  keywords: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies'
  name: Maybe<Scalars['String']>
  version: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>
  version: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies'
  name: Maybe<Scalars['String']>
  version: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>
  version: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
  name: Maybe<StringQueryOperatorInput>
  description: Maybe<StringQueryOperatorInput>
  version: Maybe<StringQueryOperatorInput>
  main: Maybe<StringQueryOperatorInput>
  author: Maybe<StringQueryOperatorInput>
  license: Maybe<StringQueryOperatorInput>
  dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
  devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
  peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
  keywords: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies'
  name: Maybe<Scalars['String']>
  version: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name: Maybe<StringQueryOperatorInput>
  version: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions'
  name: Maybe<Scalars['String']>
  path: Maybe<Scalars['String']>
  short_name: Maybe<Scalars['String']>
  start_url: Maybe<Scalars['String']>
  background_color: Maybe<Scalars['String']>
  theme_color: Maybe<Scalars['String']>
  display: Maybe<Scalars['String']>
  icon: Maybe<Scalars['String']>
  cache_busting_mode: Maybe<Scalars['String']>
  include_favicon: Maybe<Scalars['Boolean']>
  legacy: Maybe<Scalars['Boolean']>
  theme_color_in_head: Maybe<Scalars['Boolean']>
  cacheDigest: Maybe<Scalars['String']>
  alias: Maybe<SitePluginPluginOptionsAlias>
  extensions: Maybe<Array<Maybe<Scalars['String']>>>
  component: Maybe<Scalars['String']>
  fonts: Maybe<Array<Maybe<Scalars['String']>>>
  pathCheck: Maybe<Scalars['Boolean']>
}

export type SitePluginPluginOptionsAlias = {
  __typename?: 'SitePluginPluginOptionsAlias'
  _components: Maybe<Scalars['String']>
  _images: Maybe<Scalars['String']>
  _layouts: Maybe<Scalars['String']>
  _pages: Maybe<Scalars['String']>
  _hooks: Maybe<Scalars['String']>
  _context: Maybe<Scalars['String']>
  _theme: Maybe<Scalars['String']>
  _generated: Maybe<Scalars['String']>
  _utils: Maybe<Scalars['String']>
  _screens: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsAliasFilterInput = {
  _components: Maybe<StringQueryOperatorInput>
  _images: Maybe<StringQueryOperatorInput>
  _layouts: Maybe<StringQueryOperatorInput>
  _pages: Maybe<StringQueryOperatorInput>
  _hooks: Maybe<StringQueryOperatorInput>
  _context: Maybe<StringQueryOperatorInput>
  _theme: Maybe<StringQueryOperatorInput>
  _generated: Maybe<StringQueryOperatorInput>
  _utils: Maybe<StringQueryOperatorInput>
  _screens: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsFilterInput = {
  name: Maybe<StringQueryOperatorInput>
  path: Maybe<StringQueryOperatorInput>
  short_name: Maybe<StringQueryOperatorInput>
  start_url: Maybe<StringQueryOperatorInput>
  background_color: Maybe<StringQueryOperatorInput>
  theme_color: Maybe<StringQueryOperatorInput>
  display: Maybe<StringQueryOperatorInput>
  icon: Maybe<StringQueryOperatorInput>
  cache_busting_mode: Maybe<StringQueryOperatorInput>
  include_favicon: Maybe<BooleanQueryOperatorInput>
  legacy: Maybe<BooleanQueryOperatorInput>
  theme_color_in_head: Maybe<BooleanQueryOperatorInput>
  cacheDigest: Maybe<StringQueryOperatorInput>
  alias: Maybe<SitePluginPluginOptionsAliasFilterInput>
  extensions: Maybe<StringQueryOperatorInput>
  component: Maybe<StringQueryOperatorInput>
  fonts: Maybe<StringQueryOperatorInput>
  pathCheck: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginSortInput = {
  fields: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
  order: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata'
  title: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  author: Maybe<Scalars['String']>
}

export type SiteSiteMetadataFilterInput = {
  title: Maybe<StringQueryOperatorInput>
  description: Maybe<StringQueryOperatorInput>
  author: Maybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
  fields: Maybe<Array<Maybe<SiteFieldsEnum>>>
  order: Maybe<Array<Maybe<SortOrderEnum>>>
}

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringQueryOperatorInput = {
  eq: Maybe<Scalars['String']>
  ne: Maybe<Scalars['String']>
  in: Maybe<Array<Maybe<Scalars['String']>>>
  nin: Maybe<Array<Maybe<Scalars['String']>>>
  regex: Maybe<Scalars['String']>
  glob: Maybe<Scalars['String']>
}

export type GatsbyImageSharpFixedFragment = {
  __typename?: 'ImageSharpFixed'
} & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  __typename?: 'ImageSharpFixed'
} & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpFixed_WithWebpFragment = {
  __typename?: 'ImageSharpFixed'
} & Pick<
  ImageSharpFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpFixed'
} & Pick<
  ImageSharpFixed,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFixed_NoBase64Fragment = {
  __typename?: 'ImageSharpFixed'
} & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpFixed'
} & Pick<
  ImageSharpFixed,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpFluidFragment = {
  __typename?: 'ImageSharpFluid'
} & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
  __typename?: 'ImageSharpFluid'
} & {
  maxHeight: ImageSharpFluid['presentationHeight']
  maxWidth: ImageSharpFluid['presentationWidth']
}

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  __typename?: 'ImageSharpFluid'
} & Pick<
  ImageSharpFluid,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpFluid_WithWebpFragment = {
  __typename?: 'ImageSharpFluid'
} & Pick<
  ImageSharpFluid,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpFluid'
} & Pick<
  ImageSharpFluid,
  | 'tracedSVG'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyImageSharpFluid_NoBase64Fragment = {
  __typename?: 'ImageSharpFluid'
} & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpFluid'
} & Pick<
  ImageSharpFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type GatsbyImageSharpResolutionsFragment = {
  __typename?: 'ImageSharpResolutions'
} & Pick<
  ImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyImageSharpResolutions_TracedSvgFragment = {
  __typename?: 'ImageSharpResolutions'
} & Pick<
  ImageSharpResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>

export type GatsbyImageSharpResolutions_WithWebpFragment = {
  __typename?: 'ImageSharpResolutions'
} & Pick<
  ImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpResolutions'
} & Pick<
  ImageSharpResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpResolutions_NoBase64Fragment = {
  __typename?: 'ImageSharpResolutions'
} & Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpResolutions'
} & Pick<
  ImageSharpResolutions,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>

export type GatsbyImageSharpSizesFragment = {
  __typename?: 'ImageSharpSizes'
} & Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpSizes_TracedSvgFragment = {
  __typename?: 'ImageSharpSizes'
} & Pick<
  ImageSharpSizes,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>

export type GatsbyImageSharpSizes_WithWebpFragment = {
  __typename?: 'ImageSharpSizes'
} & Pick<
  ImageSharpSizes,
  | 'base64'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = {
  __typename?: 'ImageSharpSizes'
} & Pick<
  ImageSharpSizes,
  | 'tracedSVG'
  | 'aspectRatio'
  | 'src'
  | 'srcSet'
  | 'srcWebp'
  | 'srcSetWebp'
  | 'sizes'
>

export type GatsbyImageSharpSizes_NoBase64Fragment = {
  __typename?: 'ImageSharpSizes'
} & Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = {
  __typename?: 'ImageSharpSizes'
} & Pick<
  ImageSharpSizes,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>

export type PagesQueryQueryVariables = Exact<{ [key: string]: never }>

export type PagesQueryQuery = { __typename?: 'Query' } & {
  allSitePage: { __typename?: 'SitePageConnection' } & {
    nodes: Array<{ __typename?: 'SitePage' } & Pick<SitePage, 'path'>>
  }
}

export type MyImagesQueryVariables = Exact<{ [key: string]: never }>

export type MyImagesQuery = { __typename?: 'Query' } & {
  images: { __typename?: 'FileConnection' } & {
    edges: Array<
      { __typename?: 'FileEdge' } & {
        node: { __typename?: 'File' } & Pick<File, 'relativePath' | 'name'> & {
            childImageSharp: Maybe<
              { __typename?: 'ImageSharp' } & {
                fluid: Maybe<
                  {
                    __typename?: 'ImageSharpFluid'
                  } & GatsbyImageSharpFluidFragment
                >
              }
            >
          }
      }
    >
  }
}

export type HelmetDataQueryVariables = Exact<{ [key: string]: never }>

export type HelmetDataQuery = { __typename?: 'Query' } & {
  site: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata: Maybe<
        { __typename?: 'SiteSiteMetadata' } & Pick<
          SiteSiteMetadata,
          'title' | 'description' | 'author'
        >
      >
    }
  >
}

export const GatsbyImageSharpFixedFragmentDoc = gql`
  fragment GatsbyImageSharpFixed on ImageSharpFixed {
    base64
    width
    height
    src
    srcSet
  }
`
export const GatsbyImageSharpFixed_TracedSvgFragmentDoc = gql`
  fragment GatsbyImageSharpFixed_tracedSVG on ImageSharpFixed {
    tracedSVG
    width
    height
    src
    srcSet
  }
`
export const GatsbyImageSharpFixed_WithWebpFragmentDoc = gql`
  fragment GatsbyImageSharpFixed_withWebp on ImageSharpFixed {
    base64
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`
export const GatsbyImageSharpFixed_WithWebp_TracedSvgFragmentDoc = gql`
  fragment GatsbyImageSharpFixed_withWebp_tracedSVG on ImageSharpFixed {
    tracedSVG
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`
export const GatsbyImageSharpFixed_NoBase64FragmentDoc = gql`
  fragment GatsbyImageSharpFixed_noBase64 on ImageSharpFixed {
    width
    height
    src
    srcSet
  }
`
export const GatsbyImageSharpFixed_WithWebp_NoBase64FragmentDoc = gql`
  fragment GatsbyImageSharpFixed_withWebp_noBase64 on ImageSharpFixed {
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`
export const GatsbyImageSharpFluidFragmentDoc = gql`
  fragment GatsbyImageSharpFluid on ImageSharpFluid {
    base64
    aspectRatio
    src
    srcSet
    sizes
  }
`
export const GatsbyImageSharpFluidLimitPresentationSizeFragmentDoc = gql`
  fragment GatsbyImageSharpFluidLimitPresentationSize on ImageSharpFluid {
    maxHeight: presentationHeight
    maxWidth: presentationWidth
  }
`
export const GatsbyImageSharpFluid_TracedSvgFragmentDoc = gql`
  fragment GatsbyImageSharpFluid_tracedSVG on ImageSharpFluid {
    tracedSVG
    aspectRatio
    src
    srcSet
    sizes
  }
`
export const GatsbyImageSharpFluid_WithWebpFragmentDoc = gql`
  fragment GatsbyImageSharpFluid_withWebp on ImageSharpFluid {
    base64
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`
export const GatsbyImageSharpFluid_WithWebp_TracedSvgFragmentDoc = gql`
  fragment GatsbyImageSharpFluid_withWebp_tracedSVG on ImageSharpFluid {
    tracedSVG
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`
export const GatsbyImageSharpFluid_NoBase64FragmentDoc = gql`
  fragment GatsbyImageSharpFluid_noBase64 on ImageSharpFluid {
    aspectRatio
    src
    srcSet
    sizes
  }
`
export const GatsbyImageSharpFluid_WithWebp_NoBase64FragmentDoc = gql`
  fragment GatsbyImageSharpFluid_withWebp_noBase64 on ImageSharpFluid {
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`
export const GatsbyImageSharpResolutionsFragmentDoc = gql`
  fragment GatsbyImageSharpResolutions on ImageSharpResolutions {
    base64
    width
    height
    src
    srcSet
  }
`
export const GatsbyImageSharpResolutions_TracedSvgFragmentDoc = gql`
  fragment GatsbyImageSharpResolutions_tracedSVG on ImageSharpResolutions {
    tracedSVG
    width
    height
    src
    srcSet
  }
`
export const GatsbyImageSharpResolutions_WithWebpFragmentDoc = gql`
  fragment GatsbyImageSharpResolutions_withWebp on ImageSharpResolutions {
    base64
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`
export const GatsbyImageSharpResolutions_WithWebp_TracedSvgFragmentDoc = gql`
  fragment GatsbyImageSharpResolutions_withWebp_tracedSVG on ImageSharpResolutions {
    tracedSVG
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`
export const GatsbyImageSharpResolutions_NoBase64FragmentDoc = gql`
  fragment GatsbyImageSharpResolutions_noBase64 on ImageSharpResolutions {
    width
    height
    src
    srcSet
  }
`
export const GatsbyImageSharpResolutions_WithWebp_NoBase64FragmentDoc = gql`
  fragment GatsbyImageSharpResolutions_withWebp_noBase64 on ImageSharpResolutions {
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`
export const GatsbyImageSharpSizesFragmentDoc = gql`
  fragment GatsbyImageSharpSizes on ImageSharpSizes {
    base64
    aspectRatio
    src
    srcSet
    sizes
  }
`
export const GatsbyImageSharpSizes_TracedSvgFragmentDoc = gql`
  fragment GatsbyImageSharpSizes_tracedSVG on ImageSharpSizes {
    tracedSVG
    aspectRatio
    src
    srcSet
    sizes
  }
`
export const GatsbyImageSharpSizes_WithWebpFragmentDoc = gql`
  fragment GatsbyImageSharpSizes_withWebp on ImageSharpSizes {
    base64
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`
export const GatsbyImageSharpSizes_WithWebp_TracedSvgFragmentDoc = gql`
  fragment GatsbyImageSharpSizes_withWebp_tracedSVG on ImageSharpSizes {
    tracedSVG
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`
export const GatsbyImageSharpSizes_NoBase64FragmentDoc = gql`
  fragment GatsbyImageSharpSizes_noBase64 on ImageSharpSizes {
    aspectRatio
    src
    srcSet
    sizes
  }
`
export const GatsbyImageSharpSizes_WithWebp_NoBase64FragmentDoc = gql`
  fragment GatsbyImageSharpSizes_withWebp_noBase64 on ImageSharpSizes {
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`
export const PagesQueryDocument = gql`
  query PagesQuery {
    allSitePage(filter: { path: { ne: "/dev-404-page/" } }) {
      nodes {
        path
      }
    }
  }
`

/**
 * __usePagesQueryQuery__
 *
 * To run a query within a React component, call `usePagesQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePagesQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePagesQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function usePagesQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PagesQueryQuery,
    PagesQueryQueryVariables
  >
) {
  return Apollo.useQuery<PagesQueryQuery, PagesQueryQueryVariables>(
    PagesQueryDocument,
    baseOptions
  )
}
export function usePagesQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PagesQueryQuery,
    PagesQueryQueryVariables
  >
) {
  return Apollo.useLazyQuery<PagesQueryQuery, PagesQueryQueryVariables>(
    PagesQueryDocument,
    baseOptions
  )
}
export type PagesQueryQueryHookResult = ReturnType<typeof usePagesQueryQuery>
export type PagesQueryLazyQueryHookResult = ReturnType<
  typeof usePagesQueryLazyQuery
>
export type PagesQueryQueryResult = Apollo.QueryResult<
  PagesQueryQuery,
  PagesQueryQueryVariables
>
export const MyImagesDocument = gql`
  query MyImages {
    images: allFile {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  ${GatsbyImageSharpFluidFragmentDoc}
`

/**
 * __useMyImagesQuery__
 *
 * To run a query within a React component, call `useMyImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyImagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyImagesQuery(
  baseOptions?: Apollo.QueryHookOptions<MyImagesQuery, MyImagesQueryVariables>
) {
  return Apollo.useQuery<MyImagesQuery, MyImagesQueryVariables>(
    MyImagesDocument,
    baseOptions
  )
}
export function useMyImagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MyImagesQuery,
    MyImagesQueryVariables
  >
) {
  return Apollo.useLazyQuery<MyImagesQuery, MyImagesQueryVariables>(
    MyImagesDocument,
    baseOptions
  )
}
export type MyImagesQueryHookResult = ReturnType<typeof useMyImagesQuery>
export type MyImagesLazyQueryHookResult = ReturnType<
  typeof useMyImagesLazyQuery
>
export type MyImagesQueryResult = Apollo.QueryResult<
  MyImagesQuery,
  MyImagesQueryVariables
>
export const HelmetDataDocument = gql`
  query HelmetData {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

/**
 * __useHelmetDataQuery__
 *
 * To run a query within a React component, call `useHelmetDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelmetDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelmetDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelmetDataQuery(
  baseOptions?: Apollo.QueryHookOptions<
    HelmetDataQuery,
    HelmetDataQueryVariables
  >
) {
  return Apollo.useQuery<HelmetDataQuery, HelmetDataQueryVariables>(
    HelmetDataDocument,
    baseOptions
  )
}
export function useHelmetDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HelmetDataQuery,
    HelmetDataQueryVariables
  >
) {
  return Apollo.useLazyQuery<HelmetDataQuery, HelmetDataQueryVariables>(
    HelmetDataDocument,
    baseOptions
  )
}
export type HelmetDataQueryHookResult = ReturnType<typeof useHelmetDataQuery>
export type HelmetDataLazyQueryHookResult = ReturnType<
  typeof useHelmetDataLazyQuery
>
export type HelmetDataQueryResult = Apollo.QueryResult<
  HelmetDataQuery,
  HelmetDataQueryVariables
>
