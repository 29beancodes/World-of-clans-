using UnityEngine;

[RequireComponent(typeof(MeshFilter), typeof(MeshRenderer))]
public class TerrainGenerator : MonoBehaviour
{
    public int width = 100;
    public int depth = 100;
    public float scale = 20f;
    public float heightMultiplier = 12f;

    void Start()
    {
        Generate();
    }

    void Generate()
    {
        Mesh mesh = new Mesh();

        Vector3[] vertices = new Vector3[(width + 1) * (depth + 1)];
        int[] triangles = new int[width * depth * 6];

        int v = 0;
        for (int z = 0; z <= depth; z++)
        {
            for (int x = 0; x <= width; x++)
            {
                float y = Mathf.PerlinNoise(x * 0.1f, z * 0.1f) * heightMultiplier;
                vertices[v] = new Vector3(x, y, z);
                v++;
            }
        }

        int t = 0;
        v = 0;

        for (int z = 0; z < depth; z++)
        {
            for (int x = 0; x < width; x++)
            {
                triangles[t + 0] = v;
                triangles[t + 1] = v + width + 1;
                triangles[t + 2] = v + 1;

                triangles[t + 3] = v + 1;
                triangles[t + 4] = v + width + 1;
                triangles[t + 5] = v + width + 2;

                v++;
                t += 6;
            }
            v++;
        }

        mesh.vertices = vertices;
        mesh.triangles = triangles;
        mesh.RecalculateNormals();

        GetComponent<MeshFilter>().mesh = mesh;
    }
}
