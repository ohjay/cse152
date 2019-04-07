import struct
import argparse
import scipy.io as sio

def is_numeric(s):
    """Source: https://stackoverflow.com/q/354038."""
    try:
        float(s)
        return True
    except ValueError:
        return False

def parse_rgb(rgb_str):
    """Partial source: https://stackoverflow.com/a/14431225."""
    s = struct.pack('>f', float(rgb_str))
    bits = struct.unpack('>l', s)[0]
    b = bits & 255
    g = (bits >> 8) & 255
    r = (bits >> 16) & 255
    return r, g, b

def read(filepath):
    """Read a PCD file from the RGB-D Object Dataset by Lai et al.
    (http://rgbd-dataset.cs.washington.edu/dataset/rgbd-dataset_pcd_ascii).
    """
    xyz = []
    rgb = []
    ixy = []
    with open(filepath) as f:
        for line in f:
            parts = line.split()
            if all([is_numeric(p) for p in parts]):
                x = float(parts[0])
                y = float(parts[1])
                z = float(parts[2])
                xyz.append((x, y, z))
                rgb.append(parse_rgb(parts[3]))
                ix = int(parts[4])
                iy = int(parts[5])
                ixy.append((ix, iy))
    print('')
    print('------------')  
    print('sanity check')
    print('------------')
    print('(x, y, z) = %r' % (xyz[-1],))
    print('(r, g, b) = %r' % (rgb[-1],))
    print('(ix, iy)  = %r' % (ixy[-1],))
    return xyz, rgb, ixy

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('filepath', type=str, help='PCD filepath')
    args = parser.parse_args()
    xyz, rgb, ixy = read(args.filepath)
    outpath = '%s.mat' % args.filepath[:args.filepath.rindex('.')]
    sio.savemat(outpath, {'xyz': xyz, 'rgb': rgb, 'ixy': ixy})
    print('\nsaved to `%s`\n' % outpath)
